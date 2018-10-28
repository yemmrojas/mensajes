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
  amigo: User;
  constructor(private activeRouter: ActivatedRoute, private usersService: UsersService) { 
    //con el sieguiente paramentro recuperamos la url de cada usuario con la importacion del ActivatedRoute
    this.amigoId = this.activeRouter.snapshot.params['uid'];
    console.log(this.amigoId);
    //aquí llamo el servicio que se creo en la carpeta de servicios para sea usado o inyectado
    //desde cualquier componente
    this.usersService.getUserId(this.amigoId).valueChanges().subscribe((data: User) =>{
      this.amigo = data;
    }, (error) => {
      console.log(error);
    });
    console.log(this.amigo);
  }

  ngOnInit() {
  }

}
