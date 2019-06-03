import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';

import { ContatosComponent } from "./contatos.component";
import { ContatoFormComponent } from "./contato-form/contato-form.component";
import { ContatoDetalheComponent } from "./contato-detalhe/contato-detalhe.component";
import { ContatoNaoEncontradoComponent } from "./contato-nao-encontrado/contato-nao-encontrado.component";
import { ContatosService } from "./contatos.service";
import { ContatosRoutingModule } from "./contatos.routing.module";
import { ContatosGuard } from "./guards/contatos.guard";
import { ContatosDeactivateGuard } from "./guards/contatos.deactivate.guard";
import { ContatoDetalheResolver } from "./guards/contato-detalhe.resolver";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContatosRoutingModule
    ],
    exports: [],
    declarations: [
        ContatosComponent,
        ContatoFormComponent,
        ContatoDetalheComponent,
        ContatoNaoEncontradoComponent
    ],
    providers: [
        ContatosService,
        ContatosGuard,
        ContatosDeactivateGuard,
        ContatoDetalheResolver
    ]
})
export class ContatosModule {}