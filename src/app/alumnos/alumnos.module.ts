import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';

import { AlumnosService } from './services/alumnos.service';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ApellidoPipe } from '../pipes/nombreYapellido.pipe';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    EditarAlumnoComponent,
    FormularioComponent,
    ListaAlumnosComponent,

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    PipesModule
    
  ], 
  exports:[
    AlumnosRoutingModule,
    SharedModule,
  ],
   providers:[
    AlumnosService,
    
  ]
})
export class AlumnosModule { }
