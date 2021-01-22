import { Component, OnInit, } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo: Todo = new Todo();

  addTodo(): void {
    this.todoService.addTodo(this.newTodo).subscribe(
      todos => this.todoService.getTodos());
  }

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

}
