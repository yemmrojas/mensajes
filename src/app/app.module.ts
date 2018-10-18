import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { ChatComponent } from './view/chat/chat.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { from } from 'rxjs';
import { MenuComponent } from './view/menu/menu.component';
 const appRutas: Routes = [
   {path: '', component: InicioComponent},
   {path: 'inicio', component: InicioComponent},
   {path: 'chat', component: ChatComponent},
   {path: 'perfil', component: PerfilComponent},
   {path: 'login', component: LoginComponent}

 ]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ChatComponent,
    PerfilComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
