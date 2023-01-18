import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from "@angular/router"
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Carrera } from 'src/app/models/carrera';
import { CarreraService } from 'src/app/services/carrera.service';
@Component({
  selector: 'app-administar-alumno',
  templateUrl: './administar-alumno.component.html',
  styleUrls: ['./administar-alumno.component.css']
})
export class AdministarAlumnoComponent implements OnInit {
  administrarAlumnoForm:FormGroup;
  titulo: String='Crear Alumno';
  accion: String="Crear";
  listCarrera: Carrera[]=[];
  id: string | null;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb:FormBuilder,
    private aRouter: ActivatedRoute,
    private alumnoService: AlumnoService,
    private carreraService: CarreraService) {
      this.administrarAlumnoForm=this.fb.group({
        nombre: ['',Validators.required],
        primer_apellido: ['',Validators.required],
        segundo_apellido: ['',Validators.required],
        sexo: ['',Validators.required],
        carrera: ['',Validators.required],
      });
      this.id=this.aRouter.snapshot.paramMap.get("id");
     }
     ngOnInit(): void {
      this.esEditar();
      this.obtenerCarreras();
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
  
    esEditar():void{
      if(this.id!=null){
        this.titulo='Editar Alumno';
        this.accion='Editar';
        this.alumnoService.obtenerAlumno(this.id).subscribe(data=>{
          this.administrarAlumnoForm.setValue({
            nombre: data.nombre,
            primer_apellido: data.primer_apellido,
            segundo_apellido: data.segundo_apellido,
            sexo: data.sexo,
            carrera: data.carrera
          });
        },
          error=>{
            this.toastr.error(error.error.msg)
          });
  
        
  
      }
      
    }
  
    ingresarAlumno(){
      if (this.id==null){
        this.ingresarAlumnoCrear();
      }
      else{
        this.editarAlumno();
      }
    }

    editarAlumno(){
      const ALUMNO: Alumno={
        nombre:this.administrarAlumnoForm.get("carrera")?.value,
        primer_apellido:this.administrarAlumnoForm.get("primer_apellido")?.value,
        segundo_apellido:this.administrarAlumnoForm.get("segundo_apellido")?.value,
        sexo:this.administrarAlumnoForm.get("sexo")?.value,
        carrera:this.administrarAlumnoForm.get("carrera")?.value,
        
      }
      this.alumnoService.editarAlumno(this.id,ALUMNO).subscribe(
        data=>{
          this.toastr.info("Alumno editado con éxito","Edición Alumno");
          this.router.navigate(['mantenedor-alumno']);
        },
        error=>{
          this.toastr.error(error.error.msg,'Error');
        }
      )
    }
  
  
    ingresarAlumnoCrear(){
      let nombre=this.administrarAlumnoForm.get("nombre")?.value;
       let primer_apellido=this.administrarAlumnoForm.get("primer_apellido")?.value;
      let  segundo_apellido=this.administrarAlumnoForm.get("segundo_apellido")?.value;
      let  sexo=this.administrarAlumnoForm.get("sexo")?.value;
      let   carrera=this.administrarAlumnoForm.get("carrera")?.value;
      const ALUMNO: Alumno={
        nombre:this.administrarAlumnoForm.get("nombre")?.value,
        primer_apellido:this.administrarAlumnoForm.get("primer_apellido")?.value,
        segundo_apellido:this.administrarAlumnoForm.get("segundo_apellido")?.value,
        sexo:this.administrarAlumnoForm.get("sexo")?.value,
        carrera:this.administrarAlumnoForm.get("carrera")?.value,
        
      }

      if (nombre.length>0 && primer_apellido.length>0){
        
        this.alumnoService.guardarAlumno(ALUMNO).subscribe(
          data=>{
            console.log(data);
            this.toastr.success('Alumno creado con éxito', 'Éxito');
            this.router.navigate(['mantenedor-alumno'])
          },
          error=>{
            console.log(error);
            this.toastr.error(error.error.msg, 'Error!');
          }
        );
        
      }
      else{
        this.toastr.error("Debe ingresar nombre y primer apellido","Error");
      }
    }

}
