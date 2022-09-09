import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../components/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Output('deleteTodo') deleteTodoEvent = new EventEmitter<void>();
  @Input() todo!: Todo;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDone(){
    this.todo.completed = !this.todo.completed;
  }
  deleteTodo(){
    this.deleteTodoEvent.emit();
  }
}
