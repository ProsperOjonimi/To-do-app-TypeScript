import { tasks } from "./tasks.js";
import { app } from "./view.js";
// Selecting the starter DOM elements
const taskInput = document.querySelector(".input-task");
const addButton = document.querySelector(".btn-add");
addButton.addEventListener("click", function (e) {
    const inputedTask = taskInput.value.trim();
    if (!inputedTask)
        return alert("Please input a task");
    const taskObj = {
        taskName: inputedTask,
        done: false,
    };
    tasks.push(taskObj);
    app.renderTasks(tasks);
    taskInput.value = "";
    const doneBtn = document.querySelectorAll(".btn-done");
    doneBtn.forEach((b) => {
        b.addEventListener("click", function (e) {
            const id = Number(b.dataset.id);
            console.log(id);
        });
    });
});
//# sourceMappingURL=controller.js.map