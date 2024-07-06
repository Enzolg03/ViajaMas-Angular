import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';
import { AerolineaDto } from '../aerolineaDto.model';
import { MaterialModule } from '../../../../angular-material/material/material.module';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-aerolinea-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './aerolinea-detalle.component.html',
  styleUrl: './aerolinea-detalle.component.css'
})
export class AerolineaDetalleComponent implements OnInit{
  aerolineaId: string | null = '';
  aerolineaForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, 
    private aerolineaService: AerolineaService, 
    private router: Router) {}

  ngOnInit(): void {
    this.aerolineaId = this.route.snapshot.paramMap.get('id');
    this.aerolineaForm = this.formulario();
    if (this.aerolineaId !== 'nuevo') {
      this.formTitulo = 'Editar Aerolinea';
      this.formType = FormType.Actualizar;
      this.cargarAerolinea(Number(this.aerolineaId));
    } else {
      this.formTitulo = 'Nueva Aerolinea';
      this.formType = FormType.Crear;
    }
  }

  formulario(): FormGroup {
    return new FormGroup({
      idaerolinea: new FormControl(''),
      nombre: new FormControl(''),
      idpais: new FormControl('')  
    });
  }

  cargarAerolinea(aerolineaid: number): void {
    this.aerolineaService.getAerolineaById(aerolineaid).subscribe((data) => {
      const { idaerolinea, nombre, pais } = data;
      this.aerolineaForm.setValue({ idaerolinea, nombre, idpais: pais.idpais });
    });
  }

  guardarAerolinea(): void {
    const aerolineaDto: AerolineaDto = this.aerolineaForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarAerolinea(aerolineaDto);
    } else {
      aerolineaDto.idaerolinea = Number(this.aerolineaId);
      this.actualizarAerolinea(aerolineaDto);
    }
  }

  registrarAerolinea(aerolineaDto: AerolineaDto): void {
    this.aerolineaService.createAerolinea(aerolineaDto).subscribe((data) => {
      this.router.navigate(['dashboard/aerolineas']);
    });
  }

  actualizarAerolinea(aerolineaDto: AerolineaDto): void {
    this.aerolineaService.updateAerolinea(aerolineaDto).subscribe((data) => {
      this.router.navigate(['dashboard/aerolineas']);
    });
  }
}
