import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Contato } from "../../entities/contato";
import { ContatosService } from "../contatos.service";

@Injectable()
export class ContatoDetalheResolver implements Resolve<Contato> {

    constructor(private contatosService: ContatosService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | any {
        console.log('ContatosDetalheResolver: Obtendo contato.');

        let id = route.params['id'];
        return this.contatosService.getContato(id);
    }
}