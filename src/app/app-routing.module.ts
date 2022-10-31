import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AutenticacionGuard]},
  {
    path:'login', loadChildren: ()=> import('./login/login.module').then((m)=> m.LoginModule)
  },
  {
    path:'cursos', loadChildren: ()=> import('./cursos/cursos.module').then((m)=> m.CursosModule), canActivate: [AutenticacionGuard]
  },
  {
    path:'alumnos', loadChildren: ()=> import('./alumnos/alumnos.module').then((m)=> m.AlumnosModule), canActivate: [AutenticacionGuard]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
