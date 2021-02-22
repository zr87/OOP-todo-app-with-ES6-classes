export default class Todo {
    description;
    priority;
    dueDate;

    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    printDetails() {
        return this.description + ", " + this.dueDate + ", " + this.priority; //"asdasdasd, 2020-12-10, medium"
    }

    static castObject2Todo(obj) {
        //csak akkor alakitja Todoo object-té ha megvan minden Tooo property-je
        if (obj.hasOwnProperty("description") && obj.hasOwnProperty("priority") && obj.hasOwnProperty("dueDate")) {
            return new Todo(obj.description, obj.priority, obj.dueDate);
        } else throw Error("Object is missing some properties (description, priority or dueDate) ");
    }
}

