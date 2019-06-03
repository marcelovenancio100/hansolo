import { Injectable } from '@angular/core';

import { Contato } from '../entities/contato';

@Injectable()
export class ContatosService {

    constructor() {}

    getContatos() {
        let contatos: Contato[] = [];
        contatos.push(new Contato(1, 'José Arnaldo', '11 4538 9899', '11 97877 4544', 'josea@uol.com.br'));
        contatos.push(new Contato(2, 'Maria Oliveira', '11 4538 1212', '11 99878 2323', 'maria@terra.com.br'));
        contatos.push(new Contato(3, 'Juliana Fonseca', '11 4534 0098', '11 94563 1156', 'juliana@uol.com.br'));
        contatos.push(new Contato(4, 'Marcos Pontes', '11 4524 5673', '11 99789 3461', 'marcospontes@bol.com.br'));
        contatos.push(new Contato(5, 'Michael Scofield', '11 4538 1156', '11 95644 7633', 'mscofield@uol.com.br'));
        contatos.push(new Contato(6, 'Gabriel da Silva', '11 4538 5699', '11 00087 2322', 'gabi@ig.com.br'));
        return contatos;
    }

    getContato(id: number) {
        let contatos = this.getContatos();
        for(let c of contatos) {
            if(c.id == id) return c;
        }
        return null;
    }
}