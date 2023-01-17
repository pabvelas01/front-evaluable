import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  url_local ="http://localhost:4000/api/carrera/";
  url_aws ="https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/carrera/";
  url=this.url_aws;
  carrera:string='';
  nomenclatura:string='';  
  constructor(private http: HttpClient) { 
    
  }

  setCarreraValues(carrera: string,nomenclatura: string){
    this.carrera=carrera,
    this.nomenclatura=nomenclatura
    
  }
  setCarreraHttp(): Observable <any>{
    return this.http.post(this.url ,{nombre:this.carrera,nomenclatura:this.nomenclatura});
  }
  
  getCarreras(): Observable <any> {
    return this.http.get(this.url);
  }

  eliminarCarrera(id:any): Observable<any>{
    return this.http.delete(this.url + id)
  }

  guardarCarrera(carrera: Carrera): Observable<any>{
    return this.http.post(this.url,this.carrera);
  }

  obtenerCarrera(id:string): Observable<any>{
    return this.http.get(this.url + id)
  }

  editarCarrera(id:any,carrera: Carrera): Observable<any>{
    return this.http.put(this.url+id , carrera);
  }

  

}
