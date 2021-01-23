import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import { DisplayTodoComponent } from './components/display-todo/display-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/display',
    pathMatch: 'full'
  },
  {
    path: "display",
    component: DisplayTodoComponent
  },
  {
    path: "add",
    component: AddTodoComponent
  },
  {
    path: "detail/:id",
    component: DetailTodoComponent
  },
  {
    path: "edit/:id",
    component: EditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
