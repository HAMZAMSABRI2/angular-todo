import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  userLoggedIn :boolean =false
  constructor(public hardcodedAuthentification:HardcodedAuthenticationService){}

  ngOnInit(): void {
    this.userLoggedIn = this.hardcodedAuthentification.isUserLogIn( )
  }
}
