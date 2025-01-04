
export interface ITask {
    id: string;
    title: string;
    description: string;
    duedate: string;
    isCompleted: boolean;
    priority: "High" | "Medium" | "Low";
}