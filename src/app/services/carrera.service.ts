import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  url ="http://localhost:4000/api/carrera";
  url_aws ="https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera";
  carrera:string='';
  nomenclatura:string='';  
  constructor(private http: HttpClient) { 
    
  }

  setCarreraValues(carrera: string,nomenclatura: string){
    this.carrera=carrera,
    this.nomenclatura=nomenclatura
    
  }
  setCarreraHttp(): Observable <any>{
    return this.http.post(this.url_aws ,{carrera:this.carrera,nomenclatura:this.nomenclatura});
  }
  
  getCarreras(): Observable <any> {
    return this.http.get(this.url_aws);
  }
}
