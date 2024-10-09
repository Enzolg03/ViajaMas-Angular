import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { UsuarioDto } from '../usuarioDto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {

  usuarios : UsuarioDto [] = [];

  displayedColumns: string[] = ['idusuario', 'nomusuario','nombres','apellidos','email'];
  
  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.usuarioService.getAllUsuarios()
    .subscribe((data)=>{
      this.usuarios = data;
    })
  }

  onNavigateUsuarioDetail(usuarioId: string): void {
    this.router.navigate([usuarioId], {relativeTo: this.route});
  }

  onNavigateCreateUsuario(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}
