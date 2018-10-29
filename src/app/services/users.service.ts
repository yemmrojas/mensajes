import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 //ahora vamos a traer los usuarios que tenemos en nuestra base de datos de firebase
 //creamos un constructor y en el inyectamos el servicio de base de datos firebase
  constructor(private angularFireDatabase: AngularFireDatabase){}
  getUsers(){
    return this.angularFireDatabase.list('/users')
  }
  //ademas tambien capturamos el id del usuario
  getUserId(uid){
    return this.angularFireDatabase.object('/users/' + uid);
  }
  createUsers(user){
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  editUsers(user){
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  //usamos este metodo para guardar un avatar por usuario 
  guardarAvatar(avatar, uid){
    return this.angularFireDatabase.object('/users/' + uid + '/avatar').set(avatar);
  }
}
