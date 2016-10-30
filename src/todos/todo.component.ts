import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from './../shared/todo'

@Component({
  selector: 'todo',
  styles: [`
    .complete { text-decoration: line-through; }
  `],
  template: `
	<div>
    <span [ngClass]="{ complete: item.complete }">{{ item.label }}</span>
    <button
      type="button"
      (click)="onChange.emit({ todo: item });">Done</button>
    <button
      type="button"
      (click)="onRemove.emit({ todo: item });">Delete</button>
  </div>
  `
})
export class TodoComponent {
  @Input() item:Todo;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
