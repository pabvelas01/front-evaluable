import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  url_local ="http://localhost:4000/api/autentificacion";
  url_aws ="https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/autentificacion/";
  url=this.url_aws;
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
    return this.http.post(this.url ,{email:this.email,password:this.password});
  }
}
