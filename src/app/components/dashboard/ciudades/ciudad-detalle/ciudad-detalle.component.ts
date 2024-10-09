import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from '../ciudad.service';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { CiudadDto } from '../ciudadDto.model';
import { Jurisdiccion } from '../../jurisdiccion/jurisdicion.model';
import { JurisdiccionService } from '../../jurisdiccion/jurisdiccion.service';
import { JurisdiccionDto } from '../../jurisdiccion/jurisdicionDto.model';


enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-ciudad-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './ciudad-detalle.component.html',
  styleUrls: ['./ciudad-detalle.component.css']
})
export class CiudadDetalleComponent implements OnInit {
  jurisdicciones: JurisdiccionDto[] = [];
  ciudadId: string | null = '';
  ciudadForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private ciudadService: CiudadService, private router: Router,
    private jurisdiccionService : JurisdiccionService
  ) {}

  ngOnInit(): void {
    this.ciudadId = this.route.snapshot.paramMap.get('id');
    this.ciudadForm = this.formulario();
    if (this.ciudadId !== 'nuevo') {
      this.formTitulo = 'Editar Ciudad';
      this.formType = FormType.Actualizar;
      this.cargarCiudad(Number(this.ciudadId));
    } else {
      this.formTitulo = 'Nueva Ciudad';
      this.formType = FormType.Crear;
    }
    this.jurisdiccionService.getAllJurisdicciones()
    .subscribe((data)=>{
      this.jurisdicciones = data;
    })
  }

  formulario(): FormGroup {
    return new FormGroup({
      idciudad: new FormControl(''),
      nomciudad: new FormControl(''),
      idjurisdiccion: new FormControl('')  
    });
  }

  cargarCiudad(ciudadId: number): void {
    this.ciudadService.getCiudadById(ciudadId).subscribe((data) => {
      const { idciudad, nomciudad, jurisdiccion } = data;
      this.ciudadForm.setValue({ idciudad, nomciudad, idjurisdiccion: jurisdiccion.idjurisdiccion });
    });
  }

  guardarCiudad(): void {
    const ciudadDto: CiudadDto = this.ciudadForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarCiudad(ciudadDto);
    } else {
      ciudadDto.idciudad = Number(this.ciudadId);
      this.actualizarCiudad(ciudadDto);
    }
  }

  registrarCiudad(ciudadDto: CiudadDto): void {
    this.ciudadService.createCiudad(ciudadDto).subscribe((data) => {
      this.router.navigate(['dashboard/ciudades']);
    });
  }

  actualizarCiudad(ciudadDto: CiudadDto): void {
    this.ciudadService.updateCiudad(ciudadDto).subscribe((data) => {
      this.router.navigate(['dashboard/ciudades']);
    });
  }
}