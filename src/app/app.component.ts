import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { HotToastService } from '@ngxpert/hot-toast';

import { FooterComponent } from './footer/footer.component';
// import { RouteGuar }
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WelcomeComponent,
    LoginComponent,
    ListTodosComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})

export class AppComponent {
  title = 'todo-1';
}
