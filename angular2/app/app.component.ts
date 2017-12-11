import {Component} from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Zdarova!';
    todos: Todo[] = todos;

    create(title: string) {
        const newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
}
