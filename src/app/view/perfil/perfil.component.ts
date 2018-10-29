import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageCroppedEvent } from'ngx-image-cropper/src/image-cropper.component';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: User;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imagenes: any;
  constructor(private userService: UsersService, private authenticationervice: AuthenticationService,
    private firebaseStorage: AngularFireStorage) {
    this.authenticationervice.obtenerEstado().subscribe((status) =>{
      this.userService.getUserId(status.uid).valueChanges().subscribe((data: User) =>{
        this.user = data;
          console.log(this.user);
        }, (error) =>{
          console.log(error);
        });
  
      }, (error) =>{
        console.log(error);
      });
    
  }
  guardarCambios(){
    if(this.croppedImage){
      const imageId = Date.now();
      //referenciamos el directorio que se va a crear en firebase
      const image = this.firebaseStorage.ref('pictures/' + imageId + '.jpg').putString(this.croppedImage, 'data_url');
      image.then((result) => {
        this.imagenes = this.firebaseStorage.ref('pictures/' + imageId + '.jpg' ).getDownloadURL();
        this.imagenes.subscribe((p) =>{
          this.userService.guardarAvatar(p, this.user.uid).then(() =>{
            alert('imagen de perfil subida');
          }).catch((error) =>{
            alert('ocurrio un error al tratar de subir la imagen');
            console.log(error);
          });
        });
      }).catch((error) =>{
        console.log(error);
      });
    }
    else{
    this.userService.editUsers(this.user).then((data) =>{
      alert('los cambios se hicieron con exito');
    }).catch((error) =>{
      alert('hubo un error al intentar guardar');
      console.log(error);
    });
  }
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
  ngOnInit() {
  }

}
