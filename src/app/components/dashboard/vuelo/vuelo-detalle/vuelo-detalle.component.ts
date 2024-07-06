import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloService } from '../vuelo.service';

import { VueloDto } from '../vueloDto.model';
import { MaterialModule } from '../../../../angular-material/material/material.module';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-vuelo-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './vuelo-detalle.component.html',
  styleUrls: ['./vuelo-detalle.component.css']
})
export class VueloDetalleComponent implements OnInit {
  vueloId: string | null = '';
  vueloForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private vueloService: VueloService, private router: Router) {}

  ngOnInit(): void {
    this.vueloId = this.route.snapshot.paramMap.get('id');
    this.vueloForm = this.formulario();
    if (this.vueloId !== 'nuevo') {
      this.formTitulo = 'Editar Vuelo';
      this.formType = FormType.Actualizar;
      this.cargarVuelo(Number(this.vueloId));
    } else {
      this.formTitulo = 'Nuevo Vuelo';
      this.formType = FormType.Crear;
    }
  }

  formulario(): FormGroup {
    return new FormGroup({
      idvuelo: new FormControl(''),
      numerovuelo: new FormControl(''),
      aerolinea: new FormControl(''),  
      avion: new FormControl(''),  
      aeropuerto_origen: new FormControl(''), 
      aeropuerto_destino: new FormControl(''),  
      fechasalida: new FormControl(''),  
      fechallegada: new FormControl(''), 
      duracion: new FormControl('')  
    });
  }

  cargarVuelo(vueloId: number): void {
    this.vueloService.getVueloById(vueloId).subscribe((data) => {
      const { idvuelo, numerovuelo, aerolinea, avion, aeropuerto_origen, aeropuerto_destino, fechasalida, fechallegada, duracion } = data;
      this.vueloForm.setValue({ idvuelo, numerovuelo, aerolinea: aerolinea.idaerolinea, avion: avion.idavion, aeropuerto_origen: aeropuerto_origen.idaeropuerto, aeropuerto_destino: aeropuerto_destino.idaeropuerto, fechasalida, fechallegada, duracion});
    });
  }

  guardarVuelo(): void {
    const vueloDto: VueloDto = this.vueloForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarVuelo(vueloDto);
    } else {
      vueloDto.idvuelo = Number(this.vueloId);
      this.actualizarVuelo(vueloDto);
    }
  }

  registrarVuelo(vueloDto: VueloDto): void {
    this.vueloService.createVuelo(vueloDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['vuelos']);
    });
  }

  actualizarVuelo(vueloDto: VueloDto): void {
    this.vueloService.updateVuelo(vueloDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['vuelos']);
    });
  }
}