import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {

  todos!: Todo[];

  getTodos(): void {
    this.todoService.getTodos().subscribe(
      gotten_todos => this.todos = gotten_todos)
  }

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

}
