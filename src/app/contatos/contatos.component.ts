import { Component, OnInit } from '@angular/core';

import { Contato } from '../entities/contato';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: Contato[];

  constructor(private contatosService: ContatosService) {}

  ngOnInit() {
    this.contatos = this.contatosService.getContatos();
  }
}
