import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoService } from '../aeropuerto.service';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { AeropuertoDto } from '../aeropuertoDto.model';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-aeropuerto-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './aeropuerto-detalle.component.html',
  styleUrls: ['./aeropuerto-detalle.component.css']
})
export class AeropuertoDetalleComponent implements OnInit {
  aeropuertoId: string | null = '';
  aeropuertoForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private aeropuertoService: AeropuertoService, private router: Router) {}

  ngOnInit(): void {
    this.aeropuertoId = this.route.snapshot.paramMap.get('id');
    this.aeropuertoForm = this.formulario();
    if (this.aeropuertoId !== 'nuevo') {
      this.formTitulo = 'Editar Aeropuerto';
      this.formType = FormType.Actualizar;
      this.cargarAeropuerto(Number(this.aeropuertoId));
    } else {
      this.formTitulo = 'Nuevo Aeropuerto';
      this.formType = FormType.Crear;
    }
  }

  formulario(): FormGroup {
    return new FormGroup({
      idaeropuerto: new FormControl(''),
      nombre: new FormControl(''),
      idciudad: new FormControl(''),  
      idjurisdiccion: new FormControl(''),  
      idpais: new FormControl('')  
    });
  }

  cargarAeropuerto(aeropuertoId: number): void {
    this.aeropuertoService.getAeropuertoById(aeropuertoId).subscribe((data) => {
      const { idaeropuerto, nombre, ciudad, jurisdiccion, pais } = data;
      this.aeropuertoForm.setValue({ idaeropuerto, nombre, idciudad: ciudad.idciudad, idjurisdiccion: jurisdiccion.idjurisdiccion, idpais: pais.idpais });
    });
  }

  guardarAeropuerto(): void {
    const aeropuertoDto: AeropuertoDto = this.aeropuertoForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarAeropuerto(aeropuertoDto);
    } else {
      aeropuertoDto.idaeropuerto = Number(this.aeropuertoId);
      this.actualizarAeropuerto(aeropuertoDto);
    }
  }

  registrarAeropuerto(aeropuertoDto: AeropuertoDto): void {
    this.aeropuertoService.createAeropuerto(aeropuertoDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['aeropuertos']);
    });
  }

  actualizarAeropuerto(aeropuertoDto: AeropuertoDto): void {
    this.aeropuertoService.updateAeropuerto(aeropuertoDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['aeropuertos']);
    });
  }
}