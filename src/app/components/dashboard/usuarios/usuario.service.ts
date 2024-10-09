import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { UsuarioDto } from './usuarioDto.model';
import { Usuario } from './usuario.mode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/v1/usuarios';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllUsuarios(): Observable<UsuarioDto[]> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<UsuarioDto[]>(this.apiUrl, { headers });
  }

  getUsuarioById(idusuario: number): Observable<Usuario> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Usuario>(`${this.apiUrl}/${idusuario}`, { headers });
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Usuario>(this.apiUrl, usuario, { headers });
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Usuario>(`${this.apiUrl}/${usuario.idusuario}`, usuario, { headers });
  }
}
