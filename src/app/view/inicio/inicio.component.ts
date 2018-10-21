import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  amigos: User[];
  buscar: string = '';
  constructor(private usersService: UsersService) {
    this.amigos = usersService.getFriends();
   }

  ngOnInit() {
  }

}
