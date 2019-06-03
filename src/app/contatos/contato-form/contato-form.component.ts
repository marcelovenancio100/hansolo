import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Contato } from '../../entities/contato';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  subscription: Subscription;
  contato: Contato;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contatosService: ContatosService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.contato = this.contatosService.getContato(params['id']);
      if(this.contato == null) this.router.navigate(['/contatos/naoEncontrado'])
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
