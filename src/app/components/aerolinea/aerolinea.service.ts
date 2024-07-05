import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea.model';
import { AerolineaDto } from './aerolineaDto.model';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  constructor(private httpClient: HttpClient
  ) { }

  getAllAerolineas(): Observable<Aerolinea[]>{
    return this.httpClient.get<Aerolinea[]>("http://localhost:8080/api/v1/aerolineas");
  }
  getAerolineaById(id: number): Observable<Aerolinea>{
    return this.httpClient.get<Aerolinea>("http://localhost:8080/api/v1/aerolineas/"+id)
  }

  createAerolinea(aerolineaDto: AerolineaDto): Observable<Aerolinea> {
    return this.httpClient.post<Aerolinea>("http://localhost:8080/api/v1/aerolineas", aerolineaDto);
  }
  
  updateAerolinea(aerolineaDto: AerolineaDto): Observable<Aerolinea> {
    return this.httpClient.put<Aerolinea>(`http://localhost:8080/api/v1/aerolineas/${aerolineaDto.idaerolinea}`, aerolineaDto);
  }
}
