import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pro1Component } from './pro1/pro1.component';
import { Pro2Component } from './pro2/pro2.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  {path: 'register-page', component: Pro2Component},
  {path: 'login-page', component: Pro1Component},
  {path: 'todolist-page', component: TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
