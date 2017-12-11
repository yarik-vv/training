export class Todo {
    // title: string;
    // completed: boolean;

    // constructor(title: string, completed: boolean) {
    //     this.title = title;
    //     this.completed = completed;
    // }

    constructor(public title: string,
                public completed: boolean = false) {
    }
}