const tasksEl = document.querySelector(".tasks");

class Task {
  constructor(text, done) {
    this.text = text;
    this.done = done;

    this.element = this._createElement();
  }

  _createElement() {
    const li = document.createElement("li");
    li.className = "task";

    const taskBody = document.createElement("div");
    taskBody.className = "task-body";

    const tick = document.createElement("div");
    tick.className = "tick";
    tick.setAttribute("role", "checkbox");
    tick.setAttribute("aria-checked", "false");
    tick.tabIndex = 0;

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = this.text;

    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";

    li.append(taskBody, taskActions);
    taskBody.append(tick, taskText);
    taskActions.append(editBtn, deleteBtn);

    li.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("tick")) return this._toggleDone();
      if (target.classList.contains("edit-btn")) return this._edit();
      if (target.classList.contains("delete-btn")) return this._delete();
    });

    return li;
  }

  _toggleDone() {
    this.done = !this.done;
    this.element.classList.toggle("checked");
  }

  _edit() {
    const editedInput = prompt();
    if (editedInput) {
      const taskText = this.element.querySelector(".task-text");
      taskText.textContent = editedInput;
    }
  }

  _delete() {
    const confirmation = confirm("Delete this task?");
    if (confirmation) this.element.remove();
  }
}

class App {
  #tasks = [];
  constructor() {
    this._attachEvents();
    this._initTutorial();
  }

  _attachEvents() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", () => {
      const input = prompt("Write task description:");
      if (input) {
        const task = new Task(input, false);
        tasksEl.append(task.element);
        this.#tasks.push(task);
        console.log(this.#tasks);
      }

      const plusIcon = document.querySelector(".plus-icon");
      plusIcon.classList.remove("animate");
      void plusIcon.offsetWidth;
      plusIcon.classList.add("animate");
    });
  }

  _initTutorial() {
    if (this.#tasks.length === 0) {
      const tutorial = new Task("Press + button to add a task");
      const tasks = document.querySelector(".tasks");
      tasks.append(tutorial.element);
    }
  }
}

const app = new App();
