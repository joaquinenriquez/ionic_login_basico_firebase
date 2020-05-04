
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../shared/usuario';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
 
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})

export class RegistrarsePage implements OnInit 
{

  public usuario: Usuario = new Usuario


  constructor(private authSvc: AuthService, private router: Router) 
  { 
  }

  ngOnInit() 
  {
  
  }

  async registrarse()
  {
    const usuario = await this.authSvc.onRegister(this.usuario);
    
    if (usuario) // Si el usuario se creo correctamente nos va a devolver algo distinto de null
    {
      console.log("El usuario se logeo correctamente");
      this.router.navigateByUrl('/'); // Lo mandamos a la home
    }

  }

}
