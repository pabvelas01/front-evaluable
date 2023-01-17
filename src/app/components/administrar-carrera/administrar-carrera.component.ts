import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router"
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-administrar-carrera',
  templateUrl: './administrar-carrera.component.html',
  styleUrls: ['./administrar-carrera.component.css']
})
export class AdministrarCarreraComponent implements OnInit {
  administrarCarreraForm:FormGroup;
  titulo: String='Crear Producto';
  accion: String="Crear";

  id: string | null;

  constructor(private carreraService:CarreraService,
    private toastr: ToastrService,
    private router: Router,
    private fb:FormBuilder,
    private aRouter: ActivatedRoute) {
      this.administrarCarreraForm=this.fb.group({
        carrera: ['',Validators.required],
        nomenclatura: ['',Validators.required]
      });
      this.id=this.aRouter.snapshot.paramMap.get("id");
     }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar():void{
    if(this.id!=null){
      this.titulo='Editar Carrera';
      this.accion='Editar';
      this.carreraService.obtenerCarrera(this.id).subscribe(data=>{
        this.administrarCarreraForm.setValue({
          carrera: data.nombre,
          nomenclatura: data.nomenclatura
        });
      },
        error=>{
          this.toastr.error(error.error.msg)
        });

      

    }
    
  }

  ingresarCarrera(){
    if (this.id==null){
      this.ingresarCarreraCrear();
    }
    else{
      this.editarCarrera();
    }
  }

  editarCarrera(){
    const CARRERA: Carrera={
      nombre:this.administrarCarreraForm.get("carrera")?.value,
      nomenclatura:this.administrarCarreraForm.get("nomenclatura")?.value,
    }
    this.carreraService.editarCarrera(this.id,CARRERA).subscribe(
      data=>{
        this.toastr.info("Carrera editada con éxito","Edición Carrera");
        this.router.navigate(['mantenedor-carrera']);
      },
      error=>{
        this.toastr.error(error.error.msg,'Error');
      }
    )
  }


  ingresarCarreraCrear(){
    let carrera= this.administrarCarreraForm.get("carrera")?.value;
    let nomenclatura= this.administrarCarreraForm.get("nomenclatura")?.value;
    if (carrera.length>0 && nomenclatura.length>0){
      this.carreraService.setCarreraValues(carrera,nomenclatura);
      this.carreraService.setCarreraHttp().subscribe(
        data=>{
          console.log(data);
          this.toastr.success('Carrera creada con éxito', 'Éxito');
          this.router.navigate(['mantenedor-carrera'])
        },
        error=>{
          console.log(error);
          this.toastr.error(error.error.msg, 'Error!');
        }
      );
      
    }
    else{
      this.toastr.error("Debe ingresar carrera y nomenclatura","Error");
    }
  }

}
