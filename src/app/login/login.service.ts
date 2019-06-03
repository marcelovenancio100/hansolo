import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  logar(usuario: Usuario) {
    if(usuario.login === "master" && usuario.senha === "1234") {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/']);
    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
