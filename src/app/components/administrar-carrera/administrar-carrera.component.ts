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
  constructor(private autentificacionService:CarreraService,
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
    
  }

}
