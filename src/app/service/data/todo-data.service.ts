import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  getAllTodos(username:any){
    return this.http.get<Todos[]>(`http://localhost:8080/list-todos/${username}`);
  }

  deleteTodo(username:any,id:any){
    return this.http.delete(`http://localhost:8080/delete-todo/${username}/${id}`);
  }

  getTodo(username:any,id:any){
    return this.http.get<Todos>(`http://localhost:8080/detail-todo/${username}/${id}`);
  }

  updateTodo(username:any,id:any,todo:any){
    return this.http.put(`http://localhost:8080/update-todo/${username}/${id}`,todo);
  }

  addTodo(username:any,todo:any){
    return this.http.post(`http://localhost:8080/add-todo/${username}`,todo);
  }


}
