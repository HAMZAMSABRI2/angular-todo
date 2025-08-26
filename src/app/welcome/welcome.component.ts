import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { NgIf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  name = ""
  message: any;
  messageWelcome: any;
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.service.getWelcomeMessage();
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {

    this.message = this.service.getWelcomeMessage().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(response);

    return true;
    

  }

  handleSuccessfulResponse(response: any) {
    this.message = response.message;
    
    
  }
  handleErrorResponse(error: any) {
    this.message = error.error.message;
  }
  handleSuccessfulResponseNew(response: any) {
    this.messageWelcome = response.message;
  }

  getWelcomeMessageWithParameter() {
    this.messageWelcome = this.service.getWelcomeMessageWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponseNew(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(response);

    return true;
  }

}
