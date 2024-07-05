import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jurisdiccion } from './jurisdicion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JurisdiccionService {

  constructor(private httpClient: HttpClient
  ) { }

  getAllJurisdicciones(): Observable<Jurisdiccion[]>{
    return this.httpClient.get<Jurisdiccion[]>("http://localhost:8080/api/v1/jurisdicciones");
  }
  getJurisdiccionById(id: number): Observable<Jurisdiccion>{
    return this.httpClient.get<Jurisdiccion>("http://localhost:8080/api/v1/jurisdicciones/"+id)
  }
  createJurisdiccion(jurisdiccion: Jurisdiccion): Observable<Jurisdiccion>{
    return this.httpClient.post<Jurisdiccion>("http://localhost:8080/api/v1/jurisdicciones",jurisdiccion);
  }
  updateJurisdiccion(jurisdiccion : Jurisdiccion):Observable<Jurisdiccion>{
    return this.httpClient.put<Jurisdiccion>("http://localhost:8080/api/v1/jurisdicciones/"+jurisdiccion.idjurisdiccion,jurisdiccion);
  }
}
