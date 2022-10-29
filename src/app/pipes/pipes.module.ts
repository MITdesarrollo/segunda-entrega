import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCursosPipe } from './filtro-cursos.pipe';
import { ApellidoPipe } from './nombreYapellido.pipe';
import { BooleanoTextoPipe } from './booleano-texto.pipe';



@NgModule({
  declarations: [
    FiltroCursosPipe,
    ApellidoPipe,
    BooleanoTextoPipe
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    FiltroCursosPipe,
    ApellidoPipe,
    BooleanoTextoPipe
  ]
})
export class PipesModule { }
