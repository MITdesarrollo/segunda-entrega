import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/servcios/sesion.service';
import { Sesion } from 'src/app/login/models/sesion';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cards-cursos',
  templateUrl: './cards-cursos.component.html',
  styleUrls: ['./cards-cursos.component.css']
})
export class CardsCursosComponent implements OnInit , OnDestroy{
  filtro: string = '';
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>
  cursosSubscription!: Subscription;

  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta',];
  
  sesion$!: Observable<Sesion>
  
  constructor(
    private cursosService: CursoService,
    private sesionService: SesionService,
    private router: Router) {
    
   }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.cursosSubscription = this.cursos$.subscribe(cursos => this.cursos = cursos) 
    this.sesion$ = this.sesionService.obetenerDatosSesion();
  }
  
  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['editar', curso])
  }
  eliminarCurso(id: number) {
    console.log(id);
    
    this.cursosService.eliminarCurso(id)
  }



  /* metodos filtrado tablas */
  /* filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
 */
    /* columna en especifico , filterPredicate lleva dos parametros*/
    /* this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.nombre
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
  filtrarComision(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.comision
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }*/
}
 


