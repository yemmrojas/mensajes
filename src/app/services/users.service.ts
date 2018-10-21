import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  amigos: User[];
  amigo: User;
  constructor() { 
    let myuser: User = {
      name: 'Yeimer',
      apellido: 'Rojas',
      edad: 32,
      correo: 'yeimerrojasb@hotmail.com',
      amigo: true,
      uid: 1
    }
    let myuser2: User = {
      name: 'Natalia',
      apellido: 'Ramos',
      edad: 32,
      correo: 'natar@hotmail.com',
      amigo: false,
      uid: 2
    }
    let myuser3: User = {
      name: 'Angela',
      apellido: 'Ramos',
      edad: 32,
      correo: 'ange@hotmail.com',
      amigo: false,
      uid: 2
    }
    this.amigos = [
      myuser,
      myuser2,
      myuser3
    ]
  }
  getFriends(){
    return this.amigos;
  }
}
