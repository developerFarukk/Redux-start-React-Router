
export enum priorityEnam {
    high = "High",
    medium = "Medium",
    low = "Low",
}


export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    priority: priorityEnam;
}

export type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;