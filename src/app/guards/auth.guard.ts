import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{

  constructor(private authSvc: AuthService, private router:Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let auxReturn = false;

    if (this.authSvc.estaLogeado) {
      auxReturn = true;
    } else {
      console.log("No estas logeado");
      this.router.navigateByUrl('/login');
    }
    
    return auxReturn;
  }

}
