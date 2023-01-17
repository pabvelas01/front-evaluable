export class Alumno{
    _id?: string;
    nombre?: String;
    primer_apellido: String;
    segundo_apellido: String;
    carrera: string;
    sexo: string;

    constructor(nombre: String,primer_apellido: String,segundo_apellido: String, carrera: string,
        sexo : string){
        this.nombre=nombre;
        this.primer_apellido=primer_apellido;
        this.segundo_apellido=segundo_apellido;
        this.carrera=carrera;
        this.sexo=sexo;
    }
    
}