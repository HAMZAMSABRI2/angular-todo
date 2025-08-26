import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  data: any;
  constructor(
    private http: HttpClient
  ) { }

  getWelcomeMessage() {
    return this.http.get('http://localhost:8080/hello-world')
  }

  getWelcomeMessageWithParameter(name: any) {
    return this.http.get(`http://localhost:8080/hello-world/${name}`)
  }
}
