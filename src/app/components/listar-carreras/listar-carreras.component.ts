import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.css']
})
export class ListarCarrerasComponent implements OnInit {
  @Input() Editable: boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
}
