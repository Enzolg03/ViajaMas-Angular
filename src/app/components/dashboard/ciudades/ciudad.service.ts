import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad.model';
import { Observable } from 'rxjs';
import { CiudadDto } from './ciudadDto.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:8080/api/v1/ciudades';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllCiudades(): Observable<CiudadDto[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<CiudadDto[]>(this.apiUrl, { headers });
  }
  getCiudadById(id: number): Observable<Ciudad>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Ciudad>(`${this.apiUrl}/${id}`, { headers })
  }

  createCiudad(ciudadDto: CiudadDto): Observable<Ciudad> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Ciudad>(this.apiUrl, ciudadDto, { headers });
  }
  
  updateCiudad(ciudadDto: CiudadDto): Observable<Ciudad> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Ciudad>(`${this.apiUrl}/${ciudadDto.idciudad}`, ciudadDto, { headers });
  }
}
