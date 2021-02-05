import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable()
export class LoginService{
    constructor(private authService: AngularFireAuth){}


}