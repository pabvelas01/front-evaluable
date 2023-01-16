import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  url ="http://localhost:4000/api/autentificacion";
  url_aws ="http://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/autentificacion";
  email:string='';
  password:string='';  
  constructor(private http: HttpClient) { 
    
  }

  setEmailPass(email: string,pass: string){
    this.email=email,
    this.password=pass
  }
  // como es una peticion es un observable como las promise
  setAutentificar(): Observable <any> {
    return this.http.post(this.url_aws ,{email:this.email,password:this.password});
  }
}
