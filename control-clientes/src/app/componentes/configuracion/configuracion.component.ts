import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
@Injectable()
export class ConfiguracionComponent implements OnInit {

  permitirRegistro = false;

  constructor(private router: Router,
              private ConfiguracionServicio: ConfiguracionServicio ) { }

  ngOnInit(): void {
    this.ConfiguracionServicio.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro!= configuracion.permitirRegistro
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro}
    this.ConfiguracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/'])
  }

}
