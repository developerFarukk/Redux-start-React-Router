
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

export enum filterTask {
    All = "all",
    High = "high",
    Medium = "medium",
    Low = "low",
}


export interface IUser {
    id: string;
    name: string;
    email: string;
}


export type DraftUser = Pick<IUser, "name" | "email" >;
