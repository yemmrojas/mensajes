import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
// para usar el modulo atenticacion con usuario y contraseña con firebase inyectamos el angular autenticación 
//como se ve a continuación, lo cual nos va apermitir conectarnos y verificar con la base de datos de firebase
  constructor(private angularFireAuth: AngularFireAuth) {
    
  }
  //este metodo es utilizado para la utenticación de usuarios que se guardaran en la base de datos de firebase
  loginEmailPass(email: string, pass: string){
    return this.angularFireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, pass); 
  }
  // este metodo es utilizado para el registro de usuarios en la base de datos
  registerEmailPass(email: string, pass: string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass); 
  }
  // con el siguiente metodo lo que aremos es recuperar la sesion del usuario para saber su estado
  obtenerEstado(){
    return this.angularFireAuth.authState;
  }
  logOut(){
    return this.angularFireAuth.auth.signOut();
  }
}
