import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy {

  promesa: any;
  //vars
  usuarios!: Usuario[];
  usuariosSubcription!: Subscription
  
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
   this.usuariosSubcription = this.alumnoService.usuariosData().subscribe(alumno => this.usuarios = alumno);
  }
  
  ngOnDestroy(): void{
      if(this.usuariosSubcription){
        this.usuariosSubcription.unsubscribe();
      }
  }
  

  agregarUsuario($event: any): void{
     let i:number= 0;
     for(let item of this.usuarios){ i++ } 
     $event.id = i
     this.usuarios.push($event) 
    }
    

  //declaracion metodo submit
  submitForm(): void{
    this.agregarUsuario(this.formulario.value);
    this.formulario.reset()
  }
  
  get cursos(): FormArray {
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void{
   this.cursos.push(new FormControl());
  }
  


  

}
