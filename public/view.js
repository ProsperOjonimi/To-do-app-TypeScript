class Tasks {
    constructor(tasksContainer, i) {
        this.tasksContainer = tasksContainer;
        this.i = i;
    }
    renderTasks(tasksArr) {
        var _a;
        this.i++;
        const html = `
       <div class="task">
          <p class="task-text">${(_a = tasksArr[tasksArr.length - 1]) === null || _a === void 0 ? void 0 : _a.taskName}</p>
          <div class='tasks-btns'>
          <button class="btn btn-done" data-id=${this.i}>Done</button>
          <button class="btn btn-delete" data-id=${this.i}>Delete</button>
          </div>
        </div>
      `;
        this.tasksContainer.insertAdjacentHTML("afterbegin", html);
    }
}
const tasksList = document.querySelector(".task-list");
export const app = new Tasks(tasksList, -1);
//# sourceMappingURL=view.js.map