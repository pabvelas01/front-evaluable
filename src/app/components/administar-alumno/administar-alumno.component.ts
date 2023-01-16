import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
@Component({
  selector: 'app-administar-alumno',
  templateUrl: './administar-alumno.component.html',
  styleUrls: ['./administar-alumno.component.css']
})
export class AdministarAlumnoComponent implements OnInit {
  administrarAlumnoForm:FormGroup;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb:FormBuilder) {
      this.administrarAlumnoForm=this.fb.group({
        nombre: ['',Validators.required],
        primer_apellido: ['',Validators.required],
        segundo_apellido: ['',Validators.required],
        sexo: ['',Validators.required],
        carrera: ['',Validators.required],
      });
     }

  ngOnInit(): void {
  }

  ingresarAlumno():void{
    
  }

}
