import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aeropuerto } from './aeropuerto.model';
import { Observable } from 'rxjs';
import { AeropuertoDto } from './aeropuertoDto.model';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(private httpClient: HttpClient
  ) { }

  getAllAeropuertos(): Observable<Aeropuerto[]>{
    return this.httpClient.get<Aeropuerto[]>("http://localhost:8080/api/v1/aeropuertos");
  }
  getAeropuertoById(id: number): Observable<Aeropuerto>{
    return this.httpClient.get<Aeropuerto>("http://localhost:8080/api/v1/aeropuertos/"+id)
  }

  createAeropuerto(aeropuertoDto: AeropuertoDto): Observable<Aeropuerto> {
    return this.httpClient.post<Aeropuerto>("http://localhost:8080/api/v1/aeropuertos", aeropuertoDto);
  }
  
  updateAeropuerto(aeropuertoDto: AeropuertoDto): Observable<Aeropuerto> {
    return this.httpClient.put<Aeropuerto>(`http://localhost:8080/api/v1/aeropuertos/${aeropuertoDto.idaeropuerto}`, aeropuertoDto);
  }
}
