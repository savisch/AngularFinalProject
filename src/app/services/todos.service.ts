import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models/todo';
import { parseTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
 
  url: string = 'http://localhost:3000/todos';


  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  };

  getTodo(id: number): Observable<Todo>{
    return this.http.get<Todo>(this.url + "/" + id)
  };

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.url, todo);
  };

  editTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.url + "/" + todo.id, todo);
  };

  deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(this.url + "/" + id);
  };

  constructor(private http: HttpClient) { };
}
