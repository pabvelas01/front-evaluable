import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  @Input() Editable:boolean=false;
  listAlumno: Alumno[]=[];

  constructor(private router: Router,
    private alumnoService:AlumnoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerAlumno();
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

}
