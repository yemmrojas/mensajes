import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/Operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //con el guard lo qu equeremos hacer es proporcionar seguridad a nustra app usando la recuperación
  //del logiado de usuario.
  constructor(private authenticationService: AuthenticationService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    //mapiamos nuestras url atraves del metodo obtener estado para dar permiso de acceso a usuarios
    //con credenciales de lo contrario no podran entrar
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.obtenerEstado().pipe(
      map(status =>{
        if(status){
          return true;
        }
        else{
          this.router.navigate(['login']);
          return false;
        }
      })
    )
  }
}
