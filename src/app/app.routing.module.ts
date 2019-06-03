import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginGuard } from "./login/login.guard";
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const APP_ROUTES: Routes = [
    { 
        path: 'contatos', 
        loadChildren: 'app/contatos/contatos.module#ContatosModule', 
        canActivate: [LoginGuard],
        canLoad: [LoginGuard]
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent, 
        canActivate: [LoginGuard] 
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}