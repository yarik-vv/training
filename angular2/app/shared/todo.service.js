"use strict";
var data_1 = require('./data');
var todo_1 = require('./todo');
var TodoService = (function () {
    function TodoService() {
        this.todos = data_1.todos;
    }
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.createTodo = function (title) {
        var newTodo = new todo_1.Todo(title);
        data_1.todos.push(newTodo);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map