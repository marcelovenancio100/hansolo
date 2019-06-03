import { Injectable } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ContatosGuard implements CanActivateChild {

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('ContatosGuard: Guarda de rota do contato.');

        //console.log(route);
        //console.log(state);

        /*
        Lógica de acessos aos módulos da aplicação. Exemplo:
        if(state.url.includes('editar')) {
            alert('Usuário sem acesso!');
            return false;
        }
        */

        return true;
    }
}