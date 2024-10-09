import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jurisdiccion } from './jurisdicion.model';
import { Observable } from 'rxjs';
import { JurisdiccionDto } from './jurisdicionDto.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JurisdiccionService {

  private apiUrl = 'http://localhost:8080/api/v1/jurisdicciones';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllJurisdicciones(): Observable<JurisdiccionDto[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<JurisdiccionDto[]>(this.apiUrl, { headers });
  }
  getJurisdiccionById(id: number): Observable<Jurisdiccion>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Jurisdiccion>(`${this.apiUrl}/${id}`, { headers })
  }

  createJurisdiccion(jurisdiccionDto: JurisdiccionDto): Observable<Jurisdiccion> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Jurisdiccion>(this.apiUrl, jurisdiccionDto, { headers });
  }
  
  updateJurisdiccion(jurisdiccionDto: JurisdiccionDto): Observable<Jurisdiccion> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Jurisdiccion>(`${this.apiUrl}/${jurisdiccionDto.idjurisdiccion}`, jurisdiccionDto, { headers });
  }
}
