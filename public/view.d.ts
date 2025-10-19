import type { TaskObjects } from "./interfaces";
declare class Tasks {
    private tasksContainer;
    constructor(tasksContainer: HTMLDivElement);
    renderAllTasks(tasksArr: TaskObjects[]): void;
}
export declare const tasksList: HTMLDivElement;
export declare const app: Tasks;
export {};
//# sourceMappingURL=view.d.ts.map