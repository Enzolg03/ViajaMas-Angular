import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoService } from '../aeropuerto.service';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { AeropuertoDto } from '../aeropuertoDto.model';
import { JurisdiccionService } from '../../jurisdiccion/jurisdiccion.service';
import { CiudadService } from '../../ciudades/ciudad.service';
import { PaisService } from '../../pais/pais.service';
import { Pais } from '../../pais/pais.model';
import { JurisdiccionDto } from '../../jurisdiccion/jurisdicionDto.model';
import { CiudadDto } from '../../ciudades/ciudadDto.model';

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
  paises : Pais [] = [];
  jurisdicciones : JurisdiccionDto [] = [];
  ciudades : CiudadDto [] = [];
  aeropuertoId: string | null = '';
  aeropuertoForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private aeropuertoService: AeropuertoService, private router: Router,
    private ciudadService: CiudadService,
    private jurisdiccionService: JurisdiccionService,
    private paisService: PaisService
  ) {}

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

    this.paisService.getAllPaises()
    .subscribe((data)=>{
      this.paises = data
    })

    this.jurisdiccionService.getAllJurisdicciones()
    .subscribe((data)=>{
      this.jurisdicciones = data
    })

    this.ciudadService.getAllCiudades()
    .subscribe((data)=>{
      this.ciudades = data
    })
  }

  formulario(): FormGroup {
    return new FormGroup({
      idaeropuerto: new FormControl(''),
      nomaeropuerto: new FormControl(''),
      idciudad: new FormControl(''),  
      idjurisdiccion: new FormControl(''),  
      idpais: new FormControl('')  
    });
  }

  cargarAeropuerto(aeropuertoId: number): void {
    this.aeropuertoService.getAeropuertoById(aeropuertoId).subscribe((data) => {
      const { idaeropuerto, nomaeropuerto, ciudad, jurisdiccion, pais } = data;
      this.aeropuertoForm.setValue({ idaeropuerto, nomaeropuerto, idciudad: ciudad.idciudad, idjurisdiccion: jurisdiccion.idjurisdiccion, idpais: pais.idpais });
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
      this.router.navigate(['dashboard/aeropuertos']);
    });
  }

  actualizarAeropuerto(aeropuertoDto: AeropuertoDto): void {
    this.aeropuertoService.updateAeropuerto(aeropuertoDto).subscribe((data) => {
      this.router.navigate(['dashboard/aeropuertos']);
    });
  }
}