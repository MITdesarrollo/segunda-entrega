import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsCursosComponent} from "./components/cards-cursos/cards-cursos.component";
import {EditarCursoComponent} from "./components/editar-curso/editar-curso.component";
import {AgregarCursoComponent} from "./components/agregar-curso/agregar-curso.component";
import {DetalleCursoComponent} from "./components/detalle-curso/detalle-curso.component";

const routes: Routes = [
  {path: '', component: CardsCursosComponent, children:[
      {path:'editar', component: EditarCursoComponent},
      {path:'agregar', component: AgregarCursoComponent},
      {path:':id', component: DetalleCursoComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
