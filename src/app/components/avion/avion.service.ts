import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from './avion.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor(private httpClient: HttpClient
  ) { }

  getAllAviones(): Observable<Avion[]>{
    return this.httpClient.get<Avion[]>("http://localhost:8080/api/v1/aviones");
  }
  getAvionById(idavion: number): Observable<Avion>{
    return this.httpClient.get<Avion>("http://localhost:8080/api/v1/aviones/"+idavion)
  }
  createAvion(avion: Avion): Observable<Avion>{
    return this.httpClient.post<Avion>("http://localhost:8080/api/v1/aviones",avion);
  }
  updateAvion(avion : Avion):Observable<Avion>{
    return this.httpClient.put<Avion>("http://localhost:8080/api/v1/aviones/"+avion.idavion,avion);
  }
}
