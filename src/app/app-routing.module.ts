import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'cursos', loadChildren: ()=> import('./cursos/cursos.module').then((m)=> m.CursosModule)},
  {path:'login', loadChildren: ()=> import('./login/login.module').then((m)=> m.LoginModule)},
  {path:'alumnos', loadChildren: ()=> import('./alumnos/alumnos.module').then((m)=> m.AlumnosModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
