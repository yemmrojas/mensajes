import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { ChatComponent } from './view/chat/chat.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { MenuComponent } from './view/menu/menu.component';
import { SearchPipe } from './pipes/search.pipe';
//es necesario para la utilizacion de las rutas
 const appRutas: Routes = [
   {path: '', component: InicioComponent},
   {path: 'inicio', component: InicioComponent},
   {path: 'chat/:uid', component: ChatComponent},
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
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
