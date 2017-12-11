import {Component, Input} from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() items: Todo[];

    delete(item: Todo) {
        let index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
