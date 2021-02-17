import { Todo } from "./Todo.js";

export class TodoList {
    todoItems;
    listEl;

    constructor(todosArray, listEl) {
        this.todoItems = todosArray || [];
        this.listEl = listEl;

        this.listEl.addEventListener("click", event => {
            console.log("todo click event", event);

            if(event.target.classList.contains("delete")) {
                event.target.parentElement.remove();
                let indexToRemove = event.target.parentElement.dataset.index;

            } // delete button kattintas$
        });
    }

    addTodo(todo) {
        if(todo instanceof Todo) {
            this.#createElement(todo, this.todoItems.length);
            this.todoItems.push(todo);
        } else throw Error("You can only add a Todo instance!");

        console.log("log todoitems", this.todoItems );
    }

    #createElement(todo, index) {
        const newLiEl = document.createElement('li');
        const listElementTemplate = `${todo.printDetails()} <button class="delete">delete</button>`
        newLiEl.dataset.index = index;
        newLiEl.innerHTML = listElementTemplate;

        this.listEl.append(newLiEl);
    }
}