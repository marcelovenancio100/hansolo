import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Contato } from '../../entities/contato';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  contato: Contato;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contatosService: ContatosService) {}

  ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
        this.contato = data.contato;
        if(this.contato == null) this.router.navigate(['/contatos/naoEncontrado'])
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/contatos', this.contato.id, 'editar'])
  }
}
