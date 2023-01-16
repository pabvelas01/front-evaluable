import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { MantenedorAlumnoComponent } from './components/mantenedor-alumno/mantenedor-alumno.component';
import { MantenedorCarreraComponent } from './components/mantenedor-carrera/mantenedor-carrera.component';
import { ListarCarrerasComponent } from './components/listar-carreras/listar-carreras.component';
import {HttpClientModule}  from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdministradorComponent,
    ListarAlumnosComponent,
    MantenedorAlumnoComponent,
    MantenedorCarreraComponent,
    ListarCarrerasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
   FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
