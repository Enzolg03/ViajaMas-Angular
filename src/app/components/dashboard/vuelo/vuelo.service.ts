import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vuelo } from './vuelo.model';
import { Observable } from 'rxjs';
import { VueloDto } from './vueloDto.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private apiUrl = 'http://localhost:8080/api/v1/vuelos';
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllVuelos(): Observable<VueloDto[]>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<VueloDto[]>(this.apiUrl, { headers });
  }
  
  getVueloById(id: number): Observable<Vuelo>{
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.get<Vuelo>(`${this.apiUrl}/${id}`, { headers })
  }

  createVuelo(vueloDto: VueloDto): Observable<Vuelo> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.post<Vuelo>(this.apiUrl, vueloDto, { headers });
  }
  
  updateVuelo(vueloDto: VueloDto): Observable<Vuelo> {
    const headers = this.authService.cabeceraMensaje();
    return this.httpClient.put<Vuelo>(`${this.apiUrl}/${vueloDto.idvuelo}`, vueloDto, { headers });
  }
}
