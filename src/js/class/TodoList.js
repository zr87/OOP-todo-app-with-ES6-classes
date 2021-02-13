import { Todo } from "./Todo.js";

export class TodoList {
    todoItems;
    listEl;

    constructor(todosArray, listEl) {
        this.todoItems = todosArray || [];
        this.listEl = listEl;
    }

    addTodo(todo) {
        if(todo instanceof Todo) {
            this.todoItems.push(todo);
            this.#createElement(todo);
        } else throw Error("You can only add a Todo instance!");
    }

    #createElement(todo) {
        const liElement = document.createElement("li");
        liElement.innerText = todo.description + ", " + todo.duedate + ", " + todo.priority;
        this.listEl.append(liElement);
    }


}