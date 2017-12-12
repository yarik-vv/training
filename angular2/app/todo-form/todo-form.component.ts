import {Component, OnInit} from '@angular/core';

import {TodoService} from "../shared/todo.service";
import {Todo} from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
    items: Todo[];
    title: string = '';

    constructor(private todoService: TodoService) {
        this.items = [];
    }

    ngOnInit() {

    }

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}
