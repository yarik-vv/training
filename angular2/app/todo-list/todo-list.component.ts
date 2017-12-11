import {Component} from '@angular/core';

import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    todos: Todo[] = todos;

    toggle(item: Todo) {
        item.completed = !item.completed;
    }

    delete(item: Todo) {
        let index = this.todos.indexOf(item);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}
