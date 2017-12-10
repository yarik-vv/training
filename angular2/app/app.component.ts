import { Component } from '@angular/core';

const todos = [
  {
    title: 'zadacha #1',
    completed: false
  },
  {
    title: 'zadacha #2',
    completed: true
  },
  {
    title: 'zadacha #3',
    completed: true
  }
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Zdarova!';
  todos = todos;

  toggle(item: any) {
    item.completed = !item.completed;
  }

  delete(item: any) {
      let index = this.todos.indexOf(item); 

      if(index > -1) {
          this.todos.splice(index, 1);
      }
  }
}
