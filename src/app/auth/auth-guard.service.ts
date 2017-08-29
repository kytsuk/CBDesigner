import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private  authServise: AuthService, private router: Router){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authServise.isAuth()){
        return true
    } else {
       this.router.navigate(['login'])
      return false;
    }
}


}
