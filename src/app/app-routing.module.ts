import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: '**', redirectTo:'', pathMatch:'full' }, /*** Para retornar a la principal cuando url no hace match con nada */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
