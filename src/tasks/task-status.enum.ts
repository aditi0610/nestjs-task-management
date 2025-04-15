// export interface Task {
//     id: string;
//     title: string;
//     description: string;
//     status: TaskStatus;
// } //this was task.model.ts file but now change it.

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}