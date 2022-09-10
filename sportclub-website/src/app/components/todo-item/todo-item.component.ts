import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Output('deleteTodo') deleteTodoEvent = new EventEmitter<void>();
  @Input() todo!: Todo;
  @Input() index!: number;
  @Input() completed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDone(){
    if (!this.completed){
      this.todo.completed = !this.todo.completed;
      this.todo.completedDate = new Date();
    } 
  }
  deleteTodo(){
    this.deleteTodoEvent.emit();
  }
}
