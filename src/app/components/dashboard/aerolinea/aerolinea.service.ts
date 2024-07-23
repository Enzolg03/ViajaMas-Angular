import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea.model';
import { AerolineaDto } from './aerolineaDto.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  private apiUrl = 'http://localhost:8080/api/v1/aerolineas';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllAerolineas(): Observable<AerolineaDto[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<AerolineaDto[]>(this.apiUrl, { headers });
  }
  getAerolineaById(id: number): Observable<Aerolinea>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Aerolinea>(`${this.apiUrl}/${id}`, { headers })
  }

  createAerolinea(aerolineaDto: AerolineaDto): Observable<Aerolinea> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Aerolinea>(this.apiUrl, aerolineaDto, { headers });
  }
  
  updateAerolinea(aerolineaDto: AerolineaDto): Observable<Aerolinea> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Aerolinea>(`${this.apiUrl}/${aerolineaDto.idaerolinea}`, aerolineaDto, { headers });
  }
}
