import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { TodosModule } from './todos/todos.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo.component';
import { TodoFormComponent } from './todos/todo-form.component';
import { TodoListComponent } from './todos/todo-list.component';

import { TodoService } from './todos/todo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoComponent,
        TodoFormComponent,
        TodoListComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
