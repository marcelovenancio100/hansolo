import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ContatoFormComponent } from "../contato-form/contato-form.component";

@Injectable()
export class ContatosDeactivateGuard implements CanDeactivate<ContatoFormComponent> {

    canDeactivate(component: ContatoFormComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('ContatosDeactivateGuard: Guarda de desativação de rota do contato.')
        return true;
    }
}