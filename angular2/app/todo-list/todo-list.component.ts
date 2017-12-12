import {Component, OnInit} from '@angular/core';

import {Todo} from '../shared/todo';
import {TodoService} from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    items: Todo[];

    constructor(private todoService: TodoService) {
        this.items = [];
    }

    ngOnInit() {
        this.todoService.getTodos().then(items => this.items = items);
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

    remove(todo: Todo) {
        this.todoService.deleteTodo(todo);
    }
}
