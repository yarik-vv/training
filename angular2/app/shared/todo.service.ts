import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {Todo} from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[];

    constructor(private http: Http) {
    };

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .then(todos => this.todos = todos)
            .catch(this.handleError);
    }

    createTodo(title: string) {
        // For request
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let newTodo = new Todo(title);

        this.http.post(this.apiUrl, newTodo, options)
            .toPromise()
            .then(res => res.json().data)
            .then(newTodo => this.todos.push(newTodo))
            .catch(this.handleError);


        this.todos.push(newTodo);
    }

    toggleTodo(todo: Todo) {
        // For request
        let url = `${this.apiUrl}/${todo.id}`;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        this.http.put(url, todo, options)
            .toPromise()
            .then(res => {
                todo.completed = !todo.completed;
            })
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        // For request
        let url = `${this.apiUrl}/${todo.id}`;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        this.http.delete(url, options )
            .toPromise()
            .then(res => {
                let index = this.todos.indexOf(todo);

                if (index > -1) {
                    this.todos.splice(index, 1);
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('OBANA', error);
        return Promise.reject(error.mesage || error);
    }
}