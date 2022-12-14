import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  
  
  formulario: FormGroup;
  constructor(
    private cursoService: CursoService,
    private router: Router 
  ) { 
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      inscripcionAbierta: new FormControl(),
      img: new FormControl()
    });
  }
  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      img: this.formulario.value.img
    }
    console.log(curso);
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['lista'])
  }

  ngOnInit(): void {
  }

}