import { tasks } from "./tasks.js";
import { app } from "./view.js";
// Selecting the starter DOM elements
const taskInput = document.querySelector(".input-task");
const addButton = document.querySelector(".btn-add");
let tasksStored = JSON.parse(localStorage.getItem("task") || "[]");
let initializeApp;
initializeApp = () => {
    app.renderAllTasks(tasksStored);
    deleteTask(tasksStored);
    checkTasks(tasksStored);
    unCheckTasks(tasksStored);
};
console.log(tasksStored);
let save;
save = function () {
    tasksStored = JSON.parse(localStorage.getItem("task") || "[]");
};
let deleteTask;
deleteTask = (d) => {
    const btnDelete = document.querySelectorAll(".btn-delete");
    if (btnDelete.length > 0) {
        btnDelete.forEach((btn) => {
            btn.addEventListener("click", function (e) {
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
let unCheckTasks;
unCheckTasks = (d) => {
    const btnUnDone = document.querySelectorAll(".btn-undone");
    if (btnUnDone.length > 0) {
        btnUnDone.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                const id = Number(btn.dataset.id);
                console.log(btnUnDone);
                d[id].done = false;
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
let checkTasks;
checkTasks = (d) => {
    const btnDone = document.querySelectorAll(".btn-done");
    if (btnDone.length > 0) {
        btnDone.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                const id = Number(btn.dataset.id);
                d[id].done = true;
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
addButton.addEventListener("click", function (e) {
    const inputedTask = taskInput.value.trim();
    if (!inputedTask)
        return alert("Please input a task");
    const taskObj = {
        taskName: inputedTask,
        done: false,
    };
    if (tasksStored.length === 0) {
        tasks.push(taskObj);
        localStorage.setItem("task", JSON.stringify(tasks));
    }
    else {
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
//# sourceMappingURL=controller.js.map