import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
    providedIn: 'root'
})
export class IntentoLoginGuard  {

    constructor(
      private authService: AuthenticationService,
      private router: Router
    ) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.esTokenExpirado()) {      
            return true
        } else {
            this.router.navigate(['/inicio/home']);
            return false
        }
    }
}