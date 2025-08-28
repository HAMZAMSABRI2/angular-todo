import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
@Component({
  selector: 'app-todo',
  imports: [DatePipe, RouterLink, FormsModule,],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers: [HotToastService]
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: any
  newData: any
  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private toast: HotToastService
  ) { }
  ngOnInit(): void {
    this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    console.log(this.id, "kezklzrklzrkl");

    this.todoService.getTodo('eee', this.id).subscribe(
      response => {
        this.todo = response
        console.log(response);
      }
    );
  }


  saveTodo() {

    this.todoService.updateTodo('eee', this.id, this.todo).subscribe(

      data => {
        console.log(data);
        this.toast.success('Tâche modifieé avec succès ✅', {
          duration: 3, // 3 secondes
          position: 'top-left', // en haut à droite
          style: {
            background: '#4caf50', // vert succès
            color: '#fff',
            padding: '12px 20px',
            'border-radius': '8px',
            'font-weight': 'bold',
            'box-shadow': '0 4px 8px rgba(0,0,0,0.2)',
            'max-width': '300px',   // limite la largeur
            width: 'auto',          // pas full width
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#4caf50',
          }
        });


      }
    );
  }

}
