import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Injectable()
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn!: boolean;
  loggedInUser!: string;
  permitirRegistro!: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private ConfiguracionServicio: ConfiguracionServicio
  ) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn=false
      }
    });

    this.ConfiguracionServicio.getConfiguracion().subscribe(configuracion =>{
      this.permitirRegistro = configuracion.permitirRegistro
    })

  }

  logout(){
    this.loginService.logout()
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }

}
