import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  amigos: User[];
  buscar: string = '';
  constructor(private usersService: UsersService, private authenticationService: AuthenticationService,
    private router: Router) {
    this.usersService.getUsers().valueChanges().subscribe((data: User[]) =>{
      this.amigos = data;
    }, (error) =>{
      console.log(error);
    });
   }

  ngOnInit() {
  }
  //vmaos hacer el metodo mque permite cerrar sesion atravez del metodo getout que hicimos
  //previamente en el servicio de atenticación
  logout(){
    this.authenticationService.logOut().then(() => {
      alert('la sesión se ha cerrado');
      this.router.navigate(['login']);
    }).catch((error) =>{
      console.log(error);
    });
  }

}
