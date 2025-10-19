import { tasks } from "./tasks.js";
import type { TaskObjects } from "./interfaces.js";
import { app } from "./view.js";
// Selecting the starter DOM elements
const taskInput = document.querySelector(".input-task") as HTMLInputElement;
const addButton = document.querySelector(".btn-add") as HTMLButtonElement;

let tasksStored: TaskObjects[] = JSON.parse(
  localStorage.getItem("task") || "[]"
);
let initializeApp: Function;
initializeApp = () => {
  app.renderAllTasks(tasksStored);
  deleteTask(tasksStored);
  checkTasks(tasksStored);
  unCheckTasks(tasksStored);
};
console.log(tasksStored);
let save: Function;
save = function () {
  tasksStored = JSON.parse(localStorage.getItem("task") || "[]");
};

let deleteTask: (d: TaskObjects[]) => void;
deleteTask = (d) => {
  const btnDelete = document.querySelectorAll<HTMLButtonElement>(".btn-delete");
  if (btnDelete.length > 0) {
    btnDelete.forEach((btn) => {
      btn.addEventListener("click", function (e: Event) {
        const id = Number(btn.dataset.id);
        d.splice(id, 1);
        localStorage.setItem("task", JSON.stringify(d));
        save();

        app.renderAllTasks(tasksStored);
        deleteTask(d);
      });
    });
  }
};

let unCheckTasks: (d: TaskObjects[]) => void;
unCheckTasks = (d) => {
  const btnUnDone = document.querySelectorAll<HTMLButtonElement>(".btn-undone");

  if (btnUnDone.length > 0) {
    btnUnDone.forEach((btn) => {
      btn.addEventListener("click", function (e: Event) {
        const id = Number(btn.dataset.id);
        console.log(btnUnDone);
        d[id]!.done = false;
        localStorage.setItem("task", JSON.stringify(d));
        save();
        console.log(tasksStored);
        app.renderAllTasks(tasksStored);
        deleteTask(d);
        unCheckTasks(d);
        checkTasks(d);
      });
    });
  }
};

let checkTasks: (d: TaskObjects[]) => void;
checkTasks = (d) => {
  const btnDone = document.querySelectorAll<HTMLButtonElement>(".btn-done");

  if (btnDone.length > 0) {
    btnDone.forEach((btn) => {
      btn.addEventListener("click", function (e: Event) {
        const id = Number(btn.dataset.id);
        d[id]!.done = true;
        console.log(btnDone);
        localStorage.setItem("task", JSON.stringify(d));
        save();
        console.log(tasks[id]);
        app.renderAllTasks(tasksStored);
        deleteTask(d);
        checkTasks(d);
        unCheckTasks(d);
      });
    });
  }
};

addButton.addEventListener("click", function (e: Event) {
  const inputedTask = taskInput.value.trim();
  if (!inputedTask) return alert("Please input a task");
  const taskObj: TaskObjects = {
    taskName: inputedTask,
    done: false,
  };
  if (tasksStored.length === 0) {
    tasks.push(taskObj);
    localStorage.setItem("task", JSON.stringify(tasks));
  } else {
    tasksStored.push(taskObj);
    localStorage.setItem("task", JSON.stringify(tasksStored));
  }
  save();
  console.log(tasksStored);
  app.renderAllTasks(tasksStored);
  taskInput.value = "";
  checkTasks(tasksStored);

  deleteTask(tasksStored);
});
initializeApp();
