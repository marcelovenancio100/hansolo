import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}