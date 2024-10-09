import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';
import { MaterialModule } from '../../../../angular-material/material/material.module';

enum formType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-pais-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './pais-detalle.component.html',
  styleUrl: './pais-detalle.component.css'
})
export class PaisDetalleComponent {
  paisId: string | null= ''
  paisForm!: FormGroup
  formType!: formType
  formTitulo!: string
  constructor(private route: ActivatedRoute,
    private paisService : PaisService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.paisId = this.route.snapshot.paramMap.get('idpais')

    this.paisForm = this.formulario()
    if(this.paisId !== 'nuevo'){
      this.formTitulo = "Editar Pais"
      this.formType = formType.Actualizar
      this.cargarPais(Number(this.paisId))
    }else{
      this.formTitulo = "Nuevo pais"
      this.formType = formType.Crear
    }
  }

  formulario(): FormGroup{
    return new FormGroup({
      idpais: new FormControl(''),
      nompais: new FormControl('')
    })
  }
  cargarPais(paisid: number): void{
    this.paisService.getPaisById(paisid)
    .subscribe(
      (data)=>{
        const {idpais, nompais} = data
        this.paisForm.setValue({idpais,nompais})
      })
  }
  guardarPais():void{
    if(this.formType === formType.Crear){
      this.registrarpais(this.paisForm.value)
    }else{
      const paisValue = {...this.paisForm.value, id: this.paisId}
      this.actualizarPais(paisValue)
    }
  }
  registrarpais(pais: Pais){
    this.paisService.createPais(pais)
    .subscribe(
      (data) => {
        this.router.navigate(["dashboard/paises"])
      }
    )
  }
  actualizarPais(pais: Pais){
    this.paisService.updatePais(pais)
    .subscribe(
      (data) => {
        this.router.navigate(["dashboard/paises"])
      }
    )
  }
}
