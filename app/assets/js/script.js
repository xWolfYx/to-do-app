class Task {
  constructor(text, done = false) {
    this.text = text;
    this.done = done;

    this.element = this.createElement();
  }

  createElement() {
    const tasks = document.getElementById("tasks");

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

    tick.addEventListener("click", () => this.toggleDone());
    editBtn.addEventListener("click", () => this.edit());
    deleteBtn.addEventListener("click", () => this.delete());

    return li;
  }

  toggleDone() {
    this.done = !this.done;
    this.element.classList.toggle("checked");
  }

  edit() {
    const editedInput = prompt();
    if (editedInput) {
      const taskText = this.element.querySelector(".task-text");
      taskText.textContent = editedInput;
    }
  }

  delete() {
    const confirmation = confirm("Delete this task?");
    if (confirmation) this.element.remove();
  }
}

const tutorial = new Task("Press + button to add a task");
const tasks = document.getElementById("tasks");
tasks.append(tutorial.element);

const addTaskBtn = document.querySelector(".add-task-btn");

addTaskBtn.addEventListener("click", function () {
  const input = prompt("Write task description:");
  if (input) {
    const task = new Task(input);
    tasks.append(task.element);
  }
});

addTaskBtn.addEventListener("click", () => {
  const plusIcon = document.querySelector(".plus");
  plusIcon.classList.remove("animate");
  void plusIcon.offsetWidth;
  plusIcon.classList.add("animate");
});
