import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanSecretariaGuard implements CanActivate {

  constructor(private authSvc:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map(  (user) => user && this.authSvc.isSecretaria(user)),
      tap(  canEdit =>{
        if(!canEdit){
          window.alert('Acceso denegado. No tiene Permisos de Secretaria.')
        }
      })
    )
  }


  
}
