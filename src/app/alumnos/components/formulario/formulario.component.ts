import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Alumno } from '../../models/alumno';

import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy {

  promesa: any;
  //vars
  alumnos!: Alumno[];
  alumnosSubcription!: Subscription
  
  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    cursos: new FormArray([new FormControl()])
  });

  constructor(
    //firma del constructor, parametros//
    private alumnoService: AlumnosService,
    private formBuilder: FormBuilder
  ) { } 

  ngOnInit(): void {
   this.alumnosSubcription = this.alumnoService.alumnosData().subscribe(alumno => this.alumnos = alumno);
  }
  
  ngOnDestroy(): void{
      if(this.alumnosSubcription){
        this.alumnosSubcription.unsubscribe();
      }
  }
  

  agregarAlumno($event: any): void{
     let i:number= 0;
     for(let item of this.alumnos){ i++ } 
     $event.id = i
     this.alumnos.push($event) 
    }
    

  //declaracion metodo submit
  submitForm(): void{
    this.agregarAlumno(this.formulario.value);
    this.formulario.reset()
  }
  
  get cursos(): FormArray {
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void{
   this.cursos.push(new FormControl());
  }
  


  

}
