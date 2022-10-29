import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CardsCursosComponent } from './components/cards-cursos/cards-cursos.component';
import { CursoService } from './services/curso.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    CardsCursosComponent,
    DetalleCursoComponent,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    PipesModule
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
