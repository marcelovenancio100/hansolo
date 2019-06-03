import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from "@angular/router";
import { Observable } from "rxjs";

import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {

    constructor(private router: Router,
                private loginService: LoginService) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('LoginGuard-canActivate: Verificando autenticação do usuário.');
        return this.validarAcesso();
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        console.log('LoginGuard-canLoad: Verificando autenticação do usuário para carregar o código do módulo.');
        return this.validarAcesso();
    }

    private validarAcesso() {
        if(this.loginService.usuarioEstaAutenticado()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}