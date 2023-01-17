import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  url_local ="http://localhost:4000/api/alumno/";
  url_aws ="https://ec2-44-212-20-191.compute-1.amazonaws.com:4000/api/alumno/";
  url=this.url_aws;
  nombre:string='';
  primer_apellido:string='';  
  segundo_apellido:string='';  
  sexo:string='';  
  carrera:string='';  
  constructor(private http: HttpClient) { 
    
  }

  
  setAlumnoHttp(nombre : string, primer_apellido : string,
    segundo_apellido : string, sexo : string,
    carrera : string): Observable <any>{
    return this.http.post(this.url ,{nombre:this.nombre,primer_apellido:this.primer_apellido,
    segundo_apellido:this.segundo_apellido,sexo:this.sexo,carrera:this.carrera});
  }
  
  getAlumnos(): Observable <any> {
    return this.http.get(this.url);
  }

  eliminarAlumno(id:any): Observable<any>{
    return this.http.delete(this.url + id)
  }
}
