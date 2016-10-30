import { NgModule } from '@angular/core';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        TodosComponent,
        TodoComponent,
        TodoFormComponent,
        TodoListComponent
    ],
    providers: [TodoService]
})
export class TodosModule { }
