import { Pipe, PipeTransform } from '@angular/core';

//los Pipes son muy importante para realiazar algun tipo de funcion en la app
// en este caso vamos a realizar un pipe para la acción de busqueda de amigos
// es importante anotar que esto se refiere a un pipe personalizado

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, args: string) {
    if(!value){
      return;
    }
    if(!args){
      return value;
    }
    //hacemos que lo que traiga los argumentos del arreclo vengan en minusculas
    args = args.toLowerCase();
    //luego retornamos todo nuestro arreclo para la busqueda asi
    return value.filter((item) =>{
      //y convertimos lo que devolvemos en texto, para que todo lo que escriba el usuario en minuscula 
      // o mayuscula lo encuetre de todas formas al hacer la comparacion
      return JSON.stringify(item).toLowerCase().includes(args);

    });

  }

}
