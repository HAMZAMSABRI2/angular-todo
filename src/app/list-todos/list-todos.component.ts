import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";

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
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, FormsModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})


export class ListTodosComponent implements OnInit {
description: any;
  constructor(private todosService: TodoDataService,
    private router: Router
  ) { }
  todos: any
  newTodo : any
  showAddModal = false;
  ngOnInit(): void {
    this.todosService.getAllTodos('eee').subscribe(
      response => {
        console.log(response);

        this.todos = response
      }
    )
  }

  deleteTodo(id: any) {
    if (confirm("Are you sure to delete?")) {
      this.todosService.deleteTodo('eee', id).subscribe(
        response => {
          this.ngOnInit()
          console.log(response);
        })
    }
  }

  updateTodo(id: any) {
    this.router.navigate(['todos', id,]);
  }

  addTodo() {
    // if (form.valid) {

      this.todosService.addTodo('eee', this.newTodo).subscribe(
        data => {
          console.log(this.newTodo);
          this.todos.push(data);
          this.showAddModal = false;
          this.ngOnInit();
        })
    // }
  }




}
