import { Todo } from "./class/Todo.js";
import { TodoList } from "./class/TodoList.js";

const formEl = document.getElementById("form");
const todolistEl = document.getElementById("todo-list");

let todoList = new TodoList([], todolistEl);

/* add test todos */
todoList.addTodo(
    new Todo("teszt todo", "low", "2021-03-01")
);
todoList.addTodo(
    new Todo("tesyt todo", "medium", "2021-03-04")
);


formEl.addEventListener("submit", event => {
    event.preventDefault();

    todoList.addTodo(
        new Todo(form.todo.value, form.priority.value, form.duedate.value)
    );
});
