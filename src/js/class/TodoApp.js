import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default class TodoApp {
    #elementId;
    appElement;
    todolist;
    listElement;

    constructor(elementId) {
        this.#elementId = elementId;
        this.#init();
    }

    #init() {
        this.appElement = document.getElementById(this.#elementId);
        this.#createTodoForm();
        this.#createTodolist();
    }

    #createTodoForm() {
        this.todoForm = new TodoForm(this);
    }

    #createTodolist() {
        this.listElement = document.createElement("UL")
        this.todolist= new TodoList(this.listElement);
        this.appElement.append(this.listElement);
    }
}