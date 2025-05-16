import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
    providedIn: 'root'
})
export class UserLoggedGuard {

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authService.esTokenExpirado()) {

            const allowedRoutes = ['inicio', 'administracion', 'maestras', 'gestion', 'reportes'];
            const _allowedRoutes = ['datos-proveedor', 'proveedor-ssoma'];

            const currentRoute = state.url.split('/')[1];
            const currentRoute2 = state.url.split('/')[2];

            if (_allowedRoutes.includes(currentRoute)) {
                const estaLogueado = this.authService.estaLogueado();
                if (estaLogueado) {
                    return true;
                }
                else {
                    this.router.navigate(['/pages/notfound']);
                    return false;
                }

            }
            else if (allowedRoutes.includes(currentRoute) && currentRoute2 != undefined) {
                return true;
            }
            else {
                this.router.navigate(['/pages/notfound']);
                return false
            }
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}