import type { TaskObjects } from "./interfaces";
declare class Tasks {
    private tasksContainer;
    private i;
    constructor(tasksContainer: HTMLDivElement, i: number);
    renderTasks(tasksArr: TaskObjects[]): void;
}
export declare const app: Tasks;
export {};
//# sourceMappingURL=view.d.ts.map