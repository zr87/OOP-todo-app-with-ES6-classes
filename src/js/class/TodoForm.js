import Todo from "./Todo.js";

export default class TodoForm {

    static FORM_INPUT_NAME = "todoDescription";
    static FORM_SELECT_NAME = "todoPriority";
    static FORM_DATE_NAME = "todoDueDate";
    static FORM_SUBMIT_NAME = "todoSubmit";
    static MIN_INPUT_LENGTH = 6;
    static FORM_TEMPLATE = `
        <form id="form">
          <input type="text" name="${TodoForm.FORM_INPUT_NAME}" placeholder="What's your task?" required>
          <input type="date" name="${TodoForm.FORM_DATE_NAME}" required>
    
          <select name="${TodoForm.FORM_SELECT_NAME}" required>
            <option value="" disabled selected>Select your option</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
    
          <input type="submit" name="todoSubmit" value="create" disabled>
        </form>
    `;

    constructor(appContext) {
        this.app = appContext;
        this.init();
    }

    init() {
        this.app.appElement.innerHTML = TodoForm.FORM_TEMPLATE;

        this.app.appElement.addEventListener("submit", event => {
            event.preventDefault();

            this.app.todolist.addTodo(
                new Todo(
                    event.target[TodoForm.FORM_INPUT_NAME].value,
                    event.target[TodoForm.FORM_SELECT_NAME].value,
                    event.target[TodoForm.FORM_DATE_NAME].value
                )
            );

            // todo: reset form  to defaults after submit
        });

        this.app.appElement.addEventListener("keyup", event => {
            event.preventDefault();

            if(event.target.name === TodoForm.FORM_INPUT_NAME) {
                if (event.target.value.length >= TodoForm.MIN_INPUT_LENGTH) {
                    event.target.classList.add("valid")
                    event.target.classList.remove("invalid");
                    event.target.form[TodoForm.FORM_SUBMIT_NAME].disabled = false;
                } else {
                    event.target.classList.add("invalid")
                    event.target.classList.remove("valid");
                    event.target.form[TodoForm.FORM_SUBMIT_NAME].disabled = true;
                }
            }
        });
    }
}