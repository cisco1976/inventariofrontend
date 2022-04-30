import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditsResponse, Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public urlBase = '../../assets/data/login.json';

  constructor( private http: HttpClient,
               private router: Router) { }

  getLogin(login: Login): Observable<CreditsResponse>{
        // Ejemplo servicio post
        // const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
        // const url = `${this.urlBase}/api/Usuarios/ActualizarUsuario`;
        // return this.http.post<CreditsResponse>(url,new Date().toISOString(),{headers: httpOptions});
        return this.http.get<CreditsResponse>(this.urlBase);
  }




  finalizarSesion = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
   
}
