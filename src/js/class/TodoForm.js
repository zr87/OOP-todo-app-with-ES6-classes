import Todo from "./Todo.js";

export default class TodoForm {

    static formTemplateHtml = `
        <form id="form">
          <input type="text" name="todo" placeholder="What's your task?" required>
          <input type="date" name="duedate" required>
    
          <select name="priority" required>
            <option value="" disabled selected>Select your option</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
    
          <input type="submit" name="submit" value="create">
        </form>
    `;

    constructor(appContext) {
        this.app = appContext;
        this.appElement = appContext.appElement;
        this.init();
    }

    init() {
        this.appElement.innerHTML = TodoForm.formTemplateHtml;

        this.appElement.addEventListener("submit", event => {
            event.preventDefault();
            this.app.todolist.addTodo(
                new Todo(
                    event.target.todo.value,
                    event.target.priority.value,
                    event.target.duedate.value
                )
            );
        });
    }
}