import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'TodoList', component: TodosComponent },
  {path: 'Schedule', component: ScheduleComponent},
  {path: 'CompletedTask', component: CompletedTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodosComponent]