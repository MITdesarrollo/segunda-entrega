import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApellidoPipe } from '../pipes/nombreYapellido.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';

import { FiltroCursosPipe } from '../pipes/filtro-cursos.pipe';



@NgModule({
  declarations: [
    BooleanoEstiloDirective,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
   exports:[
    MaterialModule,
    ReactiveFormsModule,  
    FormsModule,
    BooleanoEstiloDirective,
  ]
})
export class SharedModule { }
