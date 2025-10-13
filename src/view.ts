import type { TaskObjects } from "./interfaces";

class Tasks {
  constructor(private tasksContainer: HTMLDivElement, private i: number) {}

  renderTasks(tasksArr: TaskObjects[]) {
    this.i++;
    const html = `
       <div class="task">
          <p class="task-text">${tasksArr[tasksArr.length - 1]?.taskName}</p>
          <div class='tasks-btns'>
          <button class="btn btn-done" data-id=${this.i}>Done</button>
          <button class="btn btn-delete" data-id=${this.i}>Delete</button>
          </div>
        </div>
      `;
    this.tasksContainer.insertAdjacentHTML("afterbegin", html);
  }
}
const tasksList = document.querySelector(".task-list") as HTMLDivElement;
export const app = new Tasks(tasksList, -1);
