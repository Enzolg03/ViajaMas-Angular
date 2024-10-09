import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aeropuerto } from './aeropuerto.model';
import { Observable } from 'rxjs';
import { AeropuertoDto } from './aeropuertoDto.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  private apiUrl = 'http://localhost:8080/api/v1/aeropuertos';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllAeropuertos(): Observable<AeropuertoDto[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<AeropuertoDto[]>(this.apiUrl, { headers });
  }
  getAeropuertoById(id: number): Observable<Aeropuerto>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Aeropuerto>(`${this.apiUrl}/${id}`, { headers })
  }
  createAeropuerto(aeropuertoDto: AeropuertoDto): Observable<Aeropuerto> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Aeropuerto>(this.apiUrl, aeropuertoDto, { headers });
  }
  
  updateAeropuerto(aeropuertoDto: AeropuertoDto): Observable<Aeropuerto> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Aeropuerto>(`${this.apiUrl}/${aeropuertoDto.idaeropuerto}`, aeropuertoDto, { headers });
  }
}
