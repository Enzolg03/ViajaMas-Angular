import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from './pais.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'http://localhost:8080/api/v1/paises';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllPaises(): Observable<Pais[]> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Pais[]>(this.apiUrl, { headers });
  }

  getPaisById(idpais: number): Observable<Pais> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Pais>(`${this.apiUrl}/${idpais}`, { headers });
  }

  createPais(pais: Pais): Observable<Pais> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Pais>(this.apiUrl, pais, { headers });
  }

  updatePais(pais: Pais): Observable<Pais> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Pais>(`${this.apiUrl}/${pais.idpais}`, pais, { headers });
  }
}

