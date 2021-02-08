import { AngularFirestoreDocument } from "@angular/fire/firestore"
import { Observable } from "rxjs"
import { Configuracion } from "../modelo/configuracion.model"


export class ConfiguracionServicio {

    configuracionDoc!: AngularFirestoreDocument<Configuracion>
    configuracion!: Observable<Configuracion>
    
    constructor() {
        
    }
}