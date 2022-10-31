import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Alumno } from '../../models/alumno';

import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy{


  alumnos!: Alumno[];
  alumnosSubcription!: Subscription
  
  constructor(
    private usuarioData: AlumnosService
  ) {}

  ngOnInit(): void {
    this.usuarioData.alumnosData().subscribe(alumno => this.alumnos =alumno);
  }
  ngOnDestroy(): void{
    if(this.alumnosSubcription){
      this.alumnosSubcription.unsubscribe();
    }
}
  // funcion para asignarle un id a evento recibido y pushearlo al array que recibe el hijo
  agregarUsuario($event: any): void{
    let i:number= 0;
     for(let item of this.alumnos){
      i++
     }
    $event.id = i
    this.alumnos.push($event)  
  }

 // delete de la fila por id
  deleteItem(i: number) {
    this.alumnos = this.alumnos.filter(item => item.id !== i)
  }
}
