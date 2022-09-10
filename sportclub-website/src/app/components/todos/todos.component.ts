import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import {Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!:Todo[];

  inputTodo:string= "";

  constructor(private taskService: TasksService) {

   }

  ngOnInit(): void {
    this.todos = this.taskService.todos;
  }

  

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      completedDate: null
    });
  }

}
