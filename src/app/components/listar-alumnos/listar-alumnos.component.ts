import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Carrera } from 'src/app/models/carrera';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  @Input() Editable:boolean=false;
  listAlumno: Alumno[]=[];
  listCarrera: Carrera[]=[];
  queryForm:FormGroup;
  
  constructor(private router: Router,
    private alumnoService:AlumnoService,
    private fb:FormBuilder,
    private carreraService:CarreraService,
    private toastr: ToastrService) { 
      this.queryForm=this.fb.group({
        nombre: ['',Validators.nullValidator],
        primer_apellido: ['',Validators.nullValidator],
        segundo_apellido: ['',Validators.nullValidator],
        carrera: ['',Validators.nullValidator],
      });
    }

  ngOnInit(): void {
    this.obtenerAlumno();
    this.obtenerCarreras();
  }

  obtenerAlumno(){
    this.alumnoService.getAlumnos().subscribe(data=>{
      this.listAlumno=data;
      console.log(data);
    },
    error=>{
      this.toastr.error(error.error.msg,"Error!");
    })
  }

  obtenerCarreras(){
    this.carreraService.getCarreras().subscribe(data=>{
      this.listCarrera=data;
      console.log(data);
    },
    error=>{
      this.toastr.error(error.error.msg,"Error!");
    })
  }

  eliminarAlumno(id:any){
    this.alumnoService.eliminarAlumno(id).subscribe(data=>{
      console.log(data);
      this.toastr.success("Alumno eliminado exitosamente.","Éxito!");
      this.obtenerAlumno();
    },
    error=>{
      this.toastr.error(error.error.msg,"Error!");
    })
  }

  buscar(){
    let nombre=this.queryForm.get("nombre")?.value;
    let primer_apellido=this.queryForm.get("primer_apellido")?.value;
    let segundo_apellido=this.queryForm.get("segundo_apellido")?.value;
    let carrera=this.queryForm.get("carrera")?.value;
    let struct={nombre:nombre, primer_apellido:primer_apellido,
    segundo_apellido:segundo_apellido,
    carrera:carrera}
    this.alumnoService.getAlumnosQuery(struct).subscribe(data=>{
      this.listAlumno=data;
    },
      error=>{

      })
  }

}
