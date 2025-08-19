import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Imported
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  username : string = "hello"
  password : string = ""
  errorMessage : string = "Invalid Credentials"
  invalidLogin :boolean = false;
  constructor(private router: Router, public hardcodedAuthentification:HardcodedAuthenticationService) { }
  ngOnInit(): void {

  }

  handleLogin(){
    if(this.hardcodedAuthentification.authenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin =true
    }
  }
}
