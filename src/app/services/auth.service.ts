import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';

import { Usuario } from '../shared/usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //#region Atributos
  public estaLogeado: any = false; // Varaible para saber si esta logeado el usuario
  //#endregion

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.estaLogeado = true)); // Cuando el usuario esta logeado nos devuelve un usuario 
  }

  //#region Métodos

  async onLogin(usuario: Usuario) {
    try {
      return await this.afAuth.signInWithEmailAndPassword
        (
          usuario.email,
          usuario.password
        );
    }
    catch (error) {
      console.log('Error al logear', error);
    }
  }


  async onRegister(usuario: Usuario)
  {
    try 
    {
      return await this.afAuth.createUserWithEmailAndPassword
      (
        usuario.email,
        usuario.password
      );   
    } catch (error)
    {
      console.log("Error al intentar registar");
    }    
  }

  

  //#endregion


}
