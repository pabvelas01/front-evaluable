import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  @Input() Editable:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
