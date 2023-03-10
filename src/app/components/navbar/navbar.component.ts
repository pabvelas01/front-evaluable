import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() navPage =1; 
  constructor( private router: Router) { 

  }

  ngOnInit(): void {
    console.log("desde navbar " +localStorage.getItem("email"));
   if(!localStorage.getItem("email")){
    this.router.navigate(['/']);
   }
  }
  salir():void{
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
