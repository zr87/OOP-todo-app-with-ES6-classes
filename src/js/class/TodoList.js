import Todo from "./Todo.js";

export default class TodoList {
    todoItems;
    listEl;
    static listElementTemplate = (todo) => `${todo.printDetails()} <button class="delete">delete</button>`;

    constructor(listEl) {
        this.listEl = listEl;
        this.todoItems = JSON.parse(localStorage.getItem("todos"))
            .map((item) => new Todo(item.description, item.dueDate, item.priority));

        this.init();
    }

    init() {
        this.#addEventlistener();
        this.#renderList();
    }

    #renderList() {
        if (this.todoItems.length) {
            this.todoItems.forEach((item, index) => {   //function (item, index) {}
                this.#createElement(item, index);
            })
        }
    }

    #addEventlistener() {
        this.listEl.addEventListener("click", event => {

            if (event.target.classList.contains("delete")) {
                event.target.parentElement.remove();
                let indexToRemove = event.target.parentElement.dataset.index;

                this.todoItems.splice(indexToRemove, 1); // remove item from array

            } // delete button kattintas
        });
    }

    addTodo(todo) {
        if (todo instanceof Todo) {
            this.#createElement(todo, this.todoItems.length);
            this.todoItems.push(todo);
            localStorage.setItem("todos", JSON.stringify(this.todoItems));
        } else throw Error("You can only add a Todo instance!");
    }

    #createElement(todo, index) {
        const newLiEl = document.createElement('li');
        newLiEl.dataset.index = index;
        newLiEl.innerHTML = TodoList.listElementTemplate(todo);

        this.listEl.append(newLiEl);
    }

}