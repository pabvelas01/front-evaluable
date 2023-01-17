import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carrera } from 'src/app/models/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.css']
})
export class ListarCarrerasComponent implements OnInit {
  @Input() Editable: boolean=false;
  listCarrera: Carrera[]=[];
  constructor(private router: Router,
    private carreraService:CarreraService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCarreras();
    console.log(this.listCarrera);
  }

  obtenerCarreras(){
    this.carreraService.getCarreras().subscribe(data=>{
      this.listCarrera=data;
      console.log(data);
    },
    error=>{
      this.toastr.error(error.error.msg,"Error!");
    })
  }

  eliminarCarrera(id:any){
    this.carreraService.eliminarCarrera(id).subscribe(data=>{
      console.log(data);
      this.toastr.success("Carrera eliminada exitosamente.","Éxito!");
      this.obtenerCarreras();
    },
    error=>{
      this.toastr.error(error.error.msg,"Error!");
    })
  }
  

  
}
