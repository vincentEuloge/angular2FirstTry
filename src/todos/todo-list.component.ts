import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from './../shared/todo'

@Component({
  selector: 'todo-list',
  template: `
  <ul>
    <li *ngFor="let todo of todos">
      <todo
  	    [item]="todo"
    	  (onChange)="onComplete.emit($event)"
      	(onRemove)="onDelete.emit($event)">
      </todo>
    </li>
  </ul>
  `
})
export class TodoListComponent {
  @Input()  todos:Todo[];
  @Output() onComplete = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
