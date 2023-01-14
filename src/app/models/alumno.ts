export class Alumno{
    id?: number;
    nombre?: String;
    primer_apellido: String;
    segundo_apellido: String;
    carrera: Object

    constructor(nombre: String,primer_apellido: String,segundo_apellido: String, carrera: Object){
        this.nombre=nombre,
        this.primer_apellido=primer_apellido,
        this.segundo_apellido=segundo_apellido,
        this.carrera=carrera
    }
    
}