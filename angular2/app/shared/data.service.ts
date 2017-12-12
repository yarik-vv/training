import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
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

        return {todos};
    }

}