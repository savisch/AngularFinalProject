import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  detailTodo: Todo = new Todo();
  detailId: any;

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe()
  }

  constructor(private todoService: TodosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.detailId = param.get('id')
      this.todoService.getTodo(Number(this.detailId)).subscribe(gottenTodo => 
        this.detailTodo = gottenTodo)
    })
  }
}
