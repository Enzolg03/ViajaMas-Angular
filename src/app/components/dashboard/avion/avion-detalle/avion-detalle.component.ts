import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AvionService } from '../avion.service';
import { Avion } from '../avion.model';

enum formType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-avion-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './avion-detalle.component.html',
  styleUrl: './avion-detalle.component.css'
})
export class AvionDetalleComponent {
  avionId: string | null= ''
  avionForm!: FormGroup
  formType!: formType
  formTitulo!: string
  constructor(private route: ActivatedRoute,
    private avionService : AvionService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.avionId = this.route.snapshot.paramMap.get('idavion')

    this.avionForm = this.formulario()
    if(this.avionId !== 'nuevo'){
      this.formTitulo = "Editar Avion"
      this.formType = formType.Actualizar
      this.cargarAvion(Number(this.avionId))
    }else{
      this.formTitulo = "Nuevo Avion"
      this.formType = formType.Crear
    }
  }

  formulario(): FormGroup{
    return new FormGroup({
      idavion: new FormControl(''),
      modelo: new FormControl(''),
      capacidadpasajeros: new FormControl('')
    })
  }
  cargarAvion(avionid: number): void{
    this.avionService.getAvionById(avionid)
    .subscribe(
      (data)=>{
        const {idavion, modelo, capacidadpasajeros} = data
        this.avionForm.setValue({idavion, modelo, capacidadpasajeros})
      })
  }
  guardarAvion():void{
    if(this.formType === formType.Crear){
      this.registraravion(this.avionForm.value)
    }else{
      const avionValue = {...this.avionForm.value, id: this.avionId}
      this.actualizarAvion(avionValue)
    }
  }
  registraravion(avion: Avion){
    this.avionService.createAvion(avion)
    .subscribe(
      (data) => {
        this.router.navigate(["dashboard/aviones"])
      }
    )
  }
  actualizarAvion(avion: Avion){
    this.avionService.updateAvion(avion)
    .subscribe(
      (data) => {
        this.router.navigate(["dashboard/aviones"])
      }
    )
  }
}
