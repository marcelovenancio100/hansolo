import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { Usuario } from '../entities/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  logar() {
    //console.log(this.usuario);
    this.loginService.logar(this.usuario);
  }
}
