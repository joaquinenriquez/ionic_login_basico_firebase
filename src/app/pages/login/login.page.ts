import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Usuario } from 'src/app/shared/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login()
  {
    const usuario = await(this.authSvc.onLogin(this.usuario)); // Usuamos await porque tenemos que esperar la respuesta del servidor
    
    if (usuario) // Si nos devulve algo distinto de null entonces el usuario esta logeado (?)
    {
      console.log("Usuario logeado correctamente");
      this.router.navigateByUrl('/admin'); 
    }
  }
}
