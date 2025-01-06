
export enum priorityEnam {
    high = "high",
    medium = "medium",
    low = "low",
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

export type filterTask = "all" | "high" | "medium" | "low" ;