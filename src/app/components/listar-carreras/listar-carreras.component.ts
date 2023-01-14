import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.css']
})
export class ListarCarrerasComponent implements OnInit {
  @Input() Editable: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
