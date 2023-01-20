import { Component, OnInit ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string | null;
  queryForm:FormGroup;
  constructor(private router: Router,
    private carreraService:CarreraService,
    private toastr: ToastrService,
    private fb:FormBuilder,
    private aRouter: ActivatedRoute) {
      this.queryForm=this.fb.group({
        nombre: ['',Validators.nullValidator],
        nomenclatura: ['',Validators.nullValidator],
      });
      this.id= this.aRouter.snapshot.paramMap.get("id");
     }

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
  
  editarCarrera(id:any){
    console.log("/administrar-carrera/"+id)
    this.router.navigate(["/administrar-carrera/"+id])
  }

  buscar(){
    let nombre=this.queryForm.get("nombre")?.value;
    let nomenclatura=this.queryForm.get("nomenclatura")?.value;
    let struct={nombre:nombre, nomenclatura:nomenclatura}
    this.carreraService.getCarrerasQuery(struct).subscribe(data=>{
      this.listCarrera=data;
    },
      error=>{

      })
  }

  
}
