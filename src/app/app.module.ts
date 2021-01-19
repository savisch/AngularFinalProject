import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTodoComponent } from './components/display-todo/display-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    DetailTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
