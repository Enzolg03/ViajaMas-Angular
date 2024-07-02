import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private httpClient: HttpClient) { }

  getAllCiudades(): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>("http://localhost:8080/api/v1/ciudades");
  }
  getCiudadById(id: number): Observable<Ciudad>{
    return this.httpClient.get<Ciudad>("http://localhost:8080/api/v1/ciudades/"+id)
  }
  createCiudad(ciudad: Ciudad): Observable<Ciudad>{
    return this.httpClient.post<Ciudad>("http://localhost:8080/api/v1/ciudades",ciudad);
  }
  updateCiudad(ciudad : Ciudad):Observable<Ciudad>{
    return this.httpClient.put<Ciudad>("http://localhost:8080/api/v1/ciudades/"+ciudad.idciudad,ciudad);
  }
}
