import { Injectable  } from "@angular/core";
import { AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable()
export class ClienteServicio {
    constructor() {}

    clientesColeccion!: AngularFirestoreCollection;
}