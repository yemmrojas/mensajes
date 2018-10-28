import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login'
  email: string = null;
  pass: string = null;
  nameUser : string = null;
  //para utilizar el login email password con firebase lo que hacemos es inyectar el servicio asi
  constructor(private authenticatioService: AuthenticationService, private userService: UsersService,
    private router: Router) { }
  //creamos un metodo para hacer login utilizando el metodo que creamos en el authenticationService 
  //previamente en la carpeta de servicio
  login(){
    //hacemos el llamado a el servicio
    this.authenticatioService.loginEmailPass(this.email, this.pass).then((data)=>{
      this.router.navigate(['inicio']);
      console.log(data);
    }).catch((error)=>{
      alert('ocurrio un error');
      console.log(error);
    });
  }
  // luego hacemos que ese usuario se registre en la base de datos 
  registro(){
    this.authenticatioService.registerEmailPass(this.email, this.pass).then((data)=>{
      //para hacer el registro o la insercion de campos a la base de datos de firebase
      //lo hacemos de esta manera
      const user = { 
        uid: data.user.uid,
        email: this.email,
        name: this.nameUser
      }
      // hacemos el llamado del servicio de user service
      this.userService.createUsers(user).then((data) => {
        alert('registro correcto');
        console.log(data);
      }).catch((error) => {
        alert('ocurrio un error');
        console.log(error);
      });
      
    }).catch((error) =>{
      alert('ocurrio un error');
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
