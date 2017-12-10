import { Component } from '@angular/core';

class item { 
    title: string;
    completed: boolean; 
}

const todos: item[] = [
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
  title: string = 'Zdarova!';
  todos: item[] = todos;

  toggle(item: item) {
    item.completed = !item.completed;
  }

  delete(item: item) {
      let index = this.todos.indexOf(item); 

      if(index > -1) {
          this.todos.splice(index, 1);
      }
  }
}
