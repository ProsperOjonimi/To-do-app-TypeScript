import { tasks } from "./tasks.js";
import type { TaskObjects } from "./interfaces.js";
import { app } from "./view.js";
// Selecting the starter DOM elements
const taskInput = document.querySelector(".input-task") as HTMLInputElement;
const addButton = document.querySelector(".btn-add") as HTMLButtonElement;

addButton.addEventListener("click", function (e: Event) {
  const inputedTask = taskInput.value.trim();
  if (!inputedTask) return alert("Please input a task");
  const taskObj: TaskObjects = {
    taskName: inputedTask,
    done: false,
  };
  tasks.push(taskObj);
  app.renderTasks(tasks);
  taskInput.value = "";

  const doneBtn = document.querySelectorAll<HTMLButtonElement>(".btn-done");
  doneBtn.forEach((b) => {
    b.addEventListener("click", function (e: Event) {
      const id = Number(b.dataset.id);
      console.log(id);
    });
  });
});
