import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default class TodoApp {
    #elementId;
    _todoForm;

    _appElement;
    get appElement() {
        return this._appElement;
    }

    _todolist;
    get todolist() {
        return this._todolist;
    }

    constructor(elementId) {
        this.#elementId = elementId;
        this.#init();
    }

    #init() {
        this._appElement = document.getElementById(this.#elementId);
        this._todoForm = new TodoForm(this);
        this._todolist = new TodoList(this);
    }
}