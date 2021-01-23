import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  editTodo: Todo = new Todo();
  editId: any;

  saveTodo(){
    this.todoService.editTodo(this.editTodo).subscribe(todos =>
      this.todoService.getTodos())
  }

  constructor(private todoService: TodosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
        this.editId = param.get('id');
        this.todoService.getTodo(Number(this.editId)).subscribe(gottenTodo => 
          this.editTodo = gottenTodo)
    })
  }
}
