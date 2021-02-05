import { Injectable  } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Cliente } from "../modelo/cliente.model";
import { map } from 'rxjs/operators';
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";
@Injectable()
export class ClienteServicio {
    constructor(private db: AngularFirestore) {
        this.clientesColeccion= db.collection('clientes',ref => ref.orderBy('nombre','asc'))
    }

    clientesColeccion!: AngularFirestoreCollection<Cliente>;
    clienteDoc!: AngularFirestoreDocument<Cliente>
    clientes!: Observable<Cliente []>;
    cliente!: Observable<Cliente>;

    getClientes(): Observable<Cliente[]>{
        //Obtener los clientes
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
    }

    agregarCliente(cliente: Cliente){
        this.clientesColeccion.add(cliente)
    }

    getCliente(id: string){
        this.clienteDoc = this.db.doc<Cliente>(`clientes/${id}`);
        this.cliente = this.clienteDoc.snapshotChanges().pipe(
            map( accion => {
                if(accion.payload.exists === false){
                    return null;
                }
                else{
                    const datos = accion.payload.data() as Cliente;
                    datos.id = accion.payload.id;
                    return datos;
                }
            })
        );
        return this.cliente;
    }

}