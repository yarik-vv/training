import {todos} from './data';
import {Todo} from './todo';

export class TodoService {
    todos: Todo[] = todos;

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {
        let newTodo = new Todo(title);
        todos.push(newTodo);
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }

    deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}