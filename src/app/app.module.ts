import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { ChatComponent } from './view/chat/chat.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { MenuComponent } from './view/menu/menu.component';
import { SearchPipe } from './pipes/search.pipe';
import { AuthGuard } from './services/auth.guard';
import { from } from 'rxjs';
//es necesario para la utilizacion de las rutas
 const appRutas: Routes = [
   {path: '', component: InicioComponent},
   {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
   {path: 'chat/:uid', component: ChatComponent, canActivate: [AuthGuard]},
   {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ImageCropperModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
