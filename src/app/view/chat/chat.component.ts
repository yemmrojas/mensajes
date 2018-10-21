import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user'
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  amigoId: any;
  amigos: User[];
  amigo: User;
  constructor(private activeRouter: ActivatedRoute, private usersService: UsersService) { 
    //con el sieguiente paramentro recuperamos la url de cada usuario con la importacion del ActivatedRoute
    this.amigoId = this.activeRouter.snapshot.params['uid'];
    console.log(this.amigoId);
    //aquí llamo el servicio que se creo en la carpeta de servicios para sea usado o inyectado
    //desde cualquier componente
    this.amigos = this.usersService.getFriends();
    this.amigo = this.amigos.find((record) => {
      //para que se recuepren los datos se debe retornar el array de los usuarios asi
      return record.uid == this.amigoId;
    });
    console.log(this.amigo);
  }

  ngOnInit() {
  }

}
