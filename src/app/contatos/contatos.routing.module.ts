import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from "./contatos.component";
import { ContatoFormComponent } from "./contato-form/contato-form.component";
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ContatoNaoEncontradoComponent } from './contato-nao-encontrado/contato-nao-encontrado.component';
import { ContatosGuard } from "./guards/contatos.guard";
import { ContatosDeactivateGuard } from "./guards/contatos.deactivate.guard";
import { ContatoDetalheResolver } from "./guards/contato-detalhe.resolver";

const CONTATOS_ROUTES: Routes = [
    { path: '', component: ContatosComponent, canActivateChild: [ContatosGuard], children: [
        { path: 'novo', component: ContatoFormComponent },
        { path: 'naoEncontrado', component: ContatoNaoEncontradoComponent },
        { path: ':id', component: ContatoDetalheComponent, resolve: {contato: ContatoDetalheResolver} },
        { path: ':id/editar', component: ContatoFormComponent, canDeactivate: [ContatosDeactivateGuard] }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(CONTATOS_ROUTES)],
    exports: [RouterModule]
})
export class ContatosRoutingModule {}