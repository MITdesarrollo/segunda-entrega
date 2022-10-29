import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SesionService } from './servcios/sesion.service';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLinkWithHref
  ],
  providers:[
    SesionService
  ],
  exports:[
    ToolbarComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
