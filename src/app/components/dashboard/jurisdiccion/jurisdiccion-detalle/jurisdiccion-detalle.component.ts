import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JurisdiccionService } from '../jurisdiccion.service';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { JurisdiccionDto } from '../jurisdicionDto.model';
import { PaisService } from '../../pais/pais.service';
import { Pais } from '../../pais/pais.model';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-jurisdiccion-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './jurisdiccion-detalle.component.html',
  styleUrls: ['./jurisdiccion-detalle.component.css']
})
export class JurisdiccionDetalleComponent implements OnInit {

  paises: Pais[] = [];
  jurisdiccionId: string | null = '';
  jurisdiccionForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private route: ActivatedRoute, private jurisdiccionService: JurisdiccionService, private router: Router,
    private paisService : PaisService
  ) {}

  ngOnInit(): void {
    this.jurisdiccionId = this.route.snapshot.paramMap.get('id');
    this.jurisdiccionForm = this.formulario();
    if (this.jurisdiccionId !== 'nuevo') {
      this.formTitulo = 'Editar Jurisdiccion';
      this.formType = FormType.Actualizar;
      this.cargarJurisdiccion(Number(this.jurisdiccionId));
    } else {
      this.formTitulo = 'Nueva Jurisdiccion';
      this.formType = FormType.Crear;
    }
    this.paisService.getAllPaises()
    .subscribe((data)=>{
      this.paises = data;
    })
  }

  formulario(): FormGroup {
    return new FormGroup({
      idjurisdiccion: new FormControl(''),
      nomjurisdiccion: new FormControl(''),
      idpais: new FormControl('')
    });
  }

  cargarJurisdiccion(jurisdiccionid: number): void {
    this.jurisdiccionService.getJurisdiccionById(jurisdiccionid).subscribe((data) => {
      const { idjurisdiccion, nomjurisdiccion, pais } = data;
      this.jurisdiccionForm.setValue({ idjurisdiccion, nomjurisdiccion, idpais: pais.idpais });
    });
  }

  guardarJurisdiccion(): void {
    const jurisdiccionDto: JurisdiccionDto = this.jurisdiccionForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarJurisdiccion(jurisdiccionDto);
    } else {
      jurisdiccionDto.idjurisdiccion = Number(this.jurisdiccionId);
      this.actualizarJurisdiccion(jurisdiccionDto);
    }
  }

  registrarJurisdiccion(jurisdiccionDto: JurisdiccionDto): void {
    this.jurisdiccionService.createJurisdiccion(jurisdiccionDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['dashboard/jurisdicciones']);
    });
  }

  actualizarJurisdiccion(jurisdiccionDto: JurisdiccionDto): void {
    this.jurisdiccionService.updateJurisdiccion(jurisdiccionDto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['dashboard/jurisdicciones']);
    });
  }
}