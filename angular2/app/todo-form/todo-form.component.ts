import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    @Output() add = new EventEmitter();

    title: string = '';

    onSubmit() {
        this.add.emit(this.title);
    }
}
