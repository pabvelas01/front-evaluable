import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  autentificacionForm:FormGroup;
  constructor(private autentificacionServise:AutentificacionService,
    private toastr: ToastrService,
    private router: Router,
    private fb:FormBuilder) { 
      this.autentificacionForm=this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      });
      
    }

  ngOnInit(): void {
    if(localStorage.getItem("email")){
      this.router.navigate(['/administrador']);
    }
  }

  ingresar():void {
    console.log("entre");
    let email=this.autentificacionForm.get('email')?.value;
    let pass=this.autentificacionForm.get('password')?.value;
    if (email.length>0 && pass.length>0){
      this.autentificar(email,pass);
    }
    else{
      this.toastr.error('Debe ingresar email y contraseña', 'Error!');
    }
  }

  autentificar(email:string,pass:string){
    this.autentificacionServise.setEmailPass(email,pass);
    this.autentificacionServise.setAutentificar().subscribe(
      data=>{
        console.log(data);
        this.toastr.success(data.msg, 'Éxito');
        localStorage.email=email;
        this.router.navigate(['/administrador'])
      },
      error=>{
        console.log(error);
        this.toastr.error(error.error.msg, 'Error!');
      }

    );
  }

}
