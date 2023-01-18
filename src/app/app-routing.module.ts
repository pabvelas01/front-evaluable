import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { LoginComponent } from './components/login/login.component';
import { MantenedorAlumnoComponent } from './components/mantenedor-alumno/mantenedor-alumno.component';
import { MantenedorCarreraComponent } from './components/mantenedor-carrera/mantenedor-carrera.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'mantenedor-alumno', component: MantenedorAlumnoComponent },
  { path: 'mantenedor-carrera', component: MantenedorCarreraComponent },
  { path: 'administrar-carrera', component: CarreraComponent },
  { path: 'editar-carrera/:id', component: CarreraComponent },
  { path: 'administrar-alumno', component: AlumnoComponent },
  { path: 'editar-alumno/:id', component: AlumnoComponent },
 // { path: '**', redirectTo:'', pathMatch:'full' }, /*** Para retornar a la principal cuando url no hace match con nada */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
