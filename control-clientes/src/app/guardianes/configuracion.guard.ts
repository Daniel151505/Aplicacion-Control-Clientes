import { AngularFireAuth } from "@angular/fire/auth";
import { CanActivate, Router } from "@angular/router";
import { ConfiguracionServicio } from "../servicios/configuracion.service";

export class ConfiguracionGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private configuracionServicio: ConfiguracionServicio
    ) {
        
    }
}