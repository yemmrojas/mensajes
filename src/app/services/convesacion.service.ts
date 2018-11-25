import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConvesacionService {

  constructor(private angularfirebasedatabase: AngularFireDatabase) { }
  createConversation(conversation){
    return this.angularfirebasedatabase.object('chat/' + conversation.uid + '/' + conversation.timestamp).set(conversation);
  }
  obtenerConversacion(uid){
    return this.angularfirebasedatabase.list('chat' + uid)
  }
}
