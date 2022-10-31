import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsCursosComponent} from "./components/cards-cursos/cards-cursos.component";
import {EditarCursoComponent} from "./components/editar-curso/editar-curso.component";
import {AgregarCursoComponent} from "./components/agregar-curso/agregar-curso.component";
import {DetalleCursoComponent} from "./components/detalle-curso/detalle-curso.component";
import { AdminGuard } from '../core/guards/admin.guard';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';

const routes: Routes = [
  {
    path:'cursos', loadChildren: ()=> import('./cursos.module').then((m)=> m.CursosModule), canActivate: [AutenticacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
