import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  todos!:Todo[];

  constructor(private taskService: TasksService) {

  }

 ngOnInit(): void {
   this.todos = this.taskService.todos.filter(i => i.completed);
 }


}
