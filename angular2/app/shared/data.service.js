"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            {
                id: 1,
                title: 'zadacha #1',
                completed: false
            },
            {
                id: 2,
                title: 'zadacha #2',
                completed: true
            },
            {
                id: 3,
                title: 'zadacha #3',
                completed: true
            }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map