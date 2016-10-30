import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './../shared/todo'

@Component({
    selector: 'todos',
    template: `
  <div>
    <todo-form
      (onAdd)="addTodo($event)">
    </todo-form>
    <todo-list
      [todos]="todos"
      (onComplete)="completeTodo($event)"
      (onDelete)="removeTodo($event)">
    </todo-list>
  </div>
  `
})
export class TodosComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) { }
    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
    addTodo(label: string) {
        this.todos = [{ label, id: this.todos.length + 1, complete: false }, ...this.todos];
    }
    completeTodo(todo: Todo) {
        this.todos = this.todos.map(
            item => item.id === todo.id ? Object.assign({}, item, { complete: true }) : item
        );
    }
    removeTodo(todo: Todo) {
        this.todos = this.todos.filter(({id}) => id !== todo.id);
    }
}
