import Todo from "./Todo.js";

export default class TodoList {
    todoItems;
    listEl;
    appContext;
    static TODOS_STORAGE_KEY = "todos";
    static listElementTemplate = (todo) => `${todo.printDetails()} <button class="delete">delete</button>`;

    constructor(appContext) {
        this.appContext = appContext;
        this.todoItems = JSON.parse(localStorage.getItem(TodoList.TODOS_STORAGE_KEY))
            .map((item) => new Todo(item.description, item.dueDate, item.priority));

        this.init();
    }

    init() {
        this.#createListElement();
        this.#addEventlistener();
        this.#renderList();
    }

    #createListElement() {
        this.listEl = document.createElement("UL");
        this.appContext.appElement.append(this.listEl);
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
            localStorage.setItem(TodoList.TODOS_STORAGE_KEY, JSON.stringify(this.todoItems));
        } else throw Error("You can only add a Todo instance!");
    }

    #createElement(todo, index) {
        const newLiEl = document.createElement('LI');
        newLiEl.dataset.index = index;
        newLiEl.innerHTML = TodoList.listElementTemplate(todo);

        this.listEl.append(newLiEl);
    }

}