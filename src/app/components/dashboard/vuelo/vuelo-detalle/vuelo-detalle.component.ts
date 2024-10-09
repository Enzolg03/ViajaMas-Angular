import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloService } from '../vuelo.service';
import { VueloDto } from '../vueloDto.model';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { AeropuertoDto } from '../../aeropuerto/aeropuertoDto.model';
import { AerolineaService } from '../../aerolinea/aerolinea.service';
import { AerolineaDto } from '../../aerolinea/aerolineaDto.model';
import { AvionService } from '../../avion/avion.service';
import { Avion } from '../../avion/avion.model';
import { AeropuertoService } from '../../aeropuerto/aeropuerto.service';

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
  aerolineas : AerolineaDto[] = [];
  aviones : Avion[] = [];
  aeropuertos : AeropuertoDto [] = [];
  vueloId: string | null = '';
  vueloForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private vueloService: VueloService, private router: Router,
    private aerolinaService : AerolineaService, private avionService : AvionService,
    private aeropuertoService: AeropuertoService
  ) {}

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
    this.aerolinaService.getAllAerolineas()
    .subscribe((data)=>{
      this.aerolineas = data;
    })
    this.avionService.getAllAviones()
    .subscribe((data)=>{
      this.aviones = data;
    })
    this.aeropuertoService.getAllAeropuertos()
    .subscribe((data)=>{
      this.aeropuertos = data;
    })
  }

  formulario(): FormGroup {
    return new FormGroup({
      idvuelo: new FormControl(''),
      numerovuelo: new FormControl(''),
      idaerolinea: new FormControl(''),
      idavion: new FormControl(''),
      id_aeropuerto_origen: new FormControl(''),
      id_aeropuerto_destino: new FormControl(''),
      fechasalida: new FormControl(''),
      fechallegada: new FormControl(''),
      duracion: new FormControl('') 
    });
  }

  cargarVuelo(vueloId: number): void {
    this.vueloService.getVueloById(vueloId).subscribe((data) => {
      const { idvuelo, numerovuelo, aerolinea, avion, aeropuerto_origen, aeropuerto_destino, fechasalida, fechallegada, duracion } = data;
      this.vueloForm.setValue({ idvuelo, numerovuelo, idaerolinea: aerolinea.idaerolinea, idavion: avion.idavion, id_aeropuerto_origen: aeropuerto_origen.idaeropuerto, id_aeropuerto_destino: aeropuerto_destino.idaeropuerto, fechasalida, fechallegada, duracion});
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
      this.router.navigate(['dashboard/vuelos']);
    });
  }

  actualizarVuelo(vueloDto: VueloDto): void {
    this.vueloService.updateVuelo(vueloDto).subscribe((data) => {
      this.router.navigate(['dashboard/vuelos']);
    });
  }
}