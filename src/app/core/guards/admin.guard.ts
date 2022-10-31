import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/login/models/sesion';
import { SesionService } from '../servcios/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesionService: SesionService,
    private router: Router
    ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesionService.obetenerDatosSesion().pipe(
        map((sesion: Sesion)=>{
          if(sesion.usuarioActivo?.admin){
            return true;
          } else{
            alert('no tiene permiso');
            this.router.navigate(['home'])
            return false;
          }
        })
      )
  }
  
}
