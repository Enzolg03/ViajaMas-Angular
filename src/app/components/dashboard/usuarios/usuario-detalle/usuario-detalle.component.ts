import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.mode';
import { UsuarioService } from '../usuario.service';

enum FormType {
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {
  
  usuarios: Usuario[] = [];
  usuarioId: string | null = '';
  usuarioForm!: FormGroup;
  formType!: FormType;
  formTitulo!: string;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('idusuario');
    this.usuarioForm = this.formulario();
    if (this.usuarioId !== 'nuevo') {
      this.formTitulo = 'Editar Usuario';
      this.formType = FormType.Actualizar;
      this.cargarUsuario(Number(this.usuarioId));
    } else {
      this.formTitulo = 'Nuevo Usuario';
      this.formType = FormType.Crear;
    }
  }

  formulario(): FormGroup {
    return new FormGroup({
      idusuario: new FormControl(''),
      nomusuario: new FormControl(''),
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl('')
    });
  }

  cargarUsuario(usuarioid: number): void {
    this.usuarioService.getUsuarioById(usuarioid).subscribe((data) => {
      const { idusuario, nomusuario, nombres, apellidos, email} = data;
      this.usuarioForm.setValue({ idusuario, nomusuario, nombres, apellidos, email});
    });
  }

  guardarUsuario(): void {
    const usuario: Usuario = this.usuarioForm.value;
    if (this.formType === FormType.Crear) {
      this.registrarUsuario(usuario);
    } else {
      usuario.idusuario = Number(this.usuarioId);
      this.actualizarUsuario(usuario);
    }
  }

  registrarUsuario(usuario: Usuario): void {
    this.usuarioService.createUsuario(usuario).subscribe((data) => {
      console.log(data);
      this.router.navigate(['dashboard/usuarios']);
    });
  }

  actualizarUsuario(usuario: Usuario): void {
    this.usuarioService.updateUsuario(usuario).subscribe((data) => {
      console.log(data);
      this.router.navigate(['dashboard/usuarios']);
    });
  }
}
