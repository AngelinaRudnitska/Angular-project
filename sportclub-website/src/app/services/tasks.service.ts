import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
        completedDate: null
      },
      {
        content: 'Second todo',
        completed: true,
        completedDate: new Date()
      }
    ];
   }
}
