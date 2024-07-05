import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from './pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  getAllPaises(): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>("http://localhost:8080/api/v1/paises");
  }
  getPaisById(idpais: number): Observable<Pais>{
    return this.httpClient.get<Pais>("http://localhost:8080/api/v1/paises/"+idpais)
  }
  createPais(pais: Pais): Observable<Pais>{
    return this.httpClient.post<Pais>("http://localhost:8080/api/v1/paises",pais);
  }
  updatePais(pais : Pais):Observable<Pais>{
    return this.httpClient.put<Pais>("http://localhost:8080/api/v1/paises/"+pais.idpais,pais);
  }
}
