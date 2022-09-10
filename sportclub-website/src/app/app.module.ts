import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TodoItemComponent,
    ScheduleComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
