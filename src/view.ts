import type { TaskObjects } from "./interfaces";

class Tasks {
  constructor(private tasksContainer: HTMLDivElement) {}
  renderAllTasks(tasksArr: TaskObjects[]) {
    this.tasksContainer.innerHTML = "";
    tasksArr.forEach((t, i) => {
      const html = `
       <div class="task">
          <p class="task-text ${t.done ? "done" : ""}">${t.taskName}</p>
          <div class='tasks-btns'>
          <button class="btn ${
            t.done ? " btn-undone" : " btn-done"
          }" data-id=${i}>${t.done ? "Undone" : "Done"}</button>
          <button class="btn btn-delete" data-id=${i}>Delete</button>
          </div>
        </div>
      `;
      this.tasksContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}
export const tasksList = document.querySelector(".task-list") as HTMLDivElement;
export const app = new Tasks(tasksList);
