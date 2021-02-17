export class Todo {
    description;
    priority;
    dueDate;

    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    printDetails() {
        return this.description + ", " + this.dueDate + ", " + this.priority;
    }
}

