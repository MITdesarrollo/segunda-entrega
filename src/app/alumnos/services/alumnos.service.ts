import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable()
export class AlumnosService {
  usuarios: Usuario []=[
    { id:0, nombre:'Juan', apellido:'Gomez', cursos:'React Js'},
    { id:1, nombre:'Juana',  apellido:'Perez', cursos:'Angular'}
   ];
  constructor() { }
  
  usuariosData(): Observable<Usuario[]>{
    return of(this.usuarios)
  }
}



