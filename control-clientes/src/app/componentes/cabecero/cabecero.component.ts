import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn!: boolean;
  loggedInUser!: string;

  constructor(
    private loginSerice: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
