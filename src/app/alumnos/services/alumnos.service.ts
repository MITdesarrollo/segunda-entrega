import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable()
export class AlumnosService {
  alumnos: Alumno []=[
    { id:0, nombre:'Juan', apellido:'Gomez', cursos:'React Js'},
    { id:1, nombre:'Juana',  apellido:'Perez', cursos:'Angular'}
   ];
  constructor() { }
  
  alumnosData(): Observable<Alumno[]>{
    return of(this.alumnos)
  }
}



