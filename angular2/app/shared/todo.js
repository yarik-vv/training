"use strict";
var Todo = (function () {
    // title: string;
    // completed: boolean;
    // constructor(title: string, completed: boolean) {
    //     this.title = title;
    //     this.completed = completed;
    // }
    function Todo(title, completed) {
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.completed = completed;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map