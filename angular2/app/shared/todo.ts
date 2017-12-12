export class Todo {
    // title: string;
    // completed: boolean;

    // constructor(title: string, completed: boolean) {
    //     this.title = title;
    //     this.completed = completed;
    // }

    id: number;

    constructor(public title: string,
                public completed: boolean = false) {
    }
}