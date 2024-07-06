import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/v1/auth/login';

  constructor(private httpClient: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    const url = `${this.loginUrl}?usuario=${usuario}&password=${password}`;
    return this.httpClient.get<any>(url);
  }

  guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string {
    return localStorage.getItem('token') || '';
  }

  cabeceraMensaje(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.obtenerToken()}`,
      'Content-Type': 'application/json'
    });
  }

  logout():void{
    localStorage.removeItem('token')   
  }

  isLogged():boolean{
    return !!localStorage.getItem("token");
  }

}
