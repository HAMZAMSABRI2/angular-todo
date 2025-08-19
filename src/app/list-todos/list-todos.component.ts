import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class Todos {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public date: Date,
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})


export class ListTodosComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  todos: any = [
    // {
    //   id: 1,
    //   description: 'hjhe'
    // }, {
    //   id: 2,
    //   description: 'hjhe'
    // }
    new Todos(1, 'test',false, new Date()),
    new Todos(2, 'test',false, new Date()),
    new Todos(3, 'test',false, new Date()),
    new Todos(4, 'test',false, new Date()),
  ]
}
