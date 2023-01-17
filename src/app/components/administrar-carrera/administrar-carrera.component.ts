import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import {Router} from "@angular/router"
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-administrar-carrera',
  templateUrl: './administrar-carrera.component.html',
  styleUrls: ['./administrar-carrera.component.css']
})
export class AdministrarCarreraComponent implements OnInit {
  administrarCarreraForm:FormGroup;
  constructor(private carreraService:CarreraService,
    private toastr: ToastrService,
    private router: Router,
    private fb:FormBuilder) {
      this.administrarCarreraForm=this.fb.group({
        carrera: ['',Validators.required],
        nomenclatura: ['',Validators.required]
      });
     }

  ngOnInit(): void {
  }

  ingresarCarrera(){
    let carrera= this.administrarCarreraForm.get("carrera")?.value;
    let nomenclatura= this.administrarCarreraForm.get("nomenclatura")?.value;
    if (carrera.length>0 && nomenclatura.length>0){
      this.carreraService.setCarreraValues(carrera,nomenclatura);
      this.carreraService.setCarreraHttp().subscribe(
        data=>{
          console.log(data);
          this.toastr.success(data.msg, 'Éxito');
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
