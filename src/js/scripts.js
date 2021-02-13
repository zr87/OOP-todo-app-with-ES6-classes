import { Todo } from "./class/Todo.js";
import { TodoList } from "./class/TodoList.js";

const formEl = document.getElementById("form");
const todolistEl = document.getElementById("todo-list");

let todoList = new TodoList([], todolistEl);

formEl.addEventListener("submit", event => {
    event.preventDefault();

    todoList.addTodo(
        new Todo(form.todo.value, form.priority.value, form.duedate.value)
    );
});
