import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


const routes: Routes = [
  {
    path:'alumnos', loadChildren: ()=> import('./alumnos.module').then((m)=> m.AlumnosModule), canActivate: [AutenticacionGuard]
  },
  {path:'',component: ListaAlumnosComponent, children:[
    {path:'agregar', component: FormularioComponent},
    {path:'editar', component: EditarAlumnoComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
