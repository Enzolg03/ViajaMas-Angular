import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad.model';
import { Observable } from 'rxjs';
import { CiudadDto } from './ciudadDto.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private httpClient: HttpClient
  ) { }

  getAllCiudades(): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>("http://localhost:8080/api/v1/ciudades");
  }
  getCiudadById(id: number): Observable<Ciudad>{
    return this.httpClient.get<Ciudad>("http://localhost:8080/api/v1/ciudades/"+id)
  }

  createCiudad(ciudadDto: CiudadDto): Observable<Ciudad> {
    return this.httpClient.post<Ciudad>("http://localhost:8080/api/v1/ciudades", ciudadDto);
  }
  
  updateCiudad(ciudadDto: CiudadDto): Observable<Ciudad> {
    return this.httpClient.put<Ciudad>(`http://localhost:8080/api/v1/ciudades/${ciudadDto.idciudad}`, ciudadDto);
  }
}
