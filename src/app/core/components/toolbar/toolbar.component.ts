import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Sesion } from 'src/app/login/models/sesion';
import { SesionService } from '../../servcios/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

sesion$!: Observable<Sesion>
/* datos!: Subscription */
  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obetenerDatosSesion();
    /* this.datos = this.sesion$.subscribe() */
  }

}
