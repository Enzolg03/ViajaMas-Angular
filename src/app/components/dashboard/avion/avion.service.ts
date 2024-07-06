import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from './avion.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  private apiUrl = 'http://localhost:8080/api/v1/aviones';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllAviones(): Observable<Avion[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Avion[]>(this.apiUrl, { headers });
  }
  getAvionById(idavion: number): Observable<Avion>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Avion>(`${this.apiUrl}/${idavion}`, { headers })
  }
  createAvion(avion: Avion): Observable<Avion>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Avion>(this.apiUrl, avion, { headers });
  }
  updateAvion(avion : Avion):Observable<Avion>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Avion>(`${this.apiUrl}/${avion.idavion}`, avion, { headers });
  }
}
