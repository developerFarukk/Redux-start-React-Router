
export enum priorityEnam {
    high = "High",
    medium = "Medium",
    low = "Low",
}


export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: priorityEnam;
}