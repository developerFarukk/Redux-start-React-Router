import { selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import TaskCard from './module/TaskCard';
import { AddTaskModal } from './module/AddTaskModal';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TaskPage = () => {

    const tasks = useAppSelector(selectTasks);
    console.log(tasks);


    return (
        <div className='max-w-7xl mx-auto p-4'>

            <div className='flex justify-between'>
                <div><h2>Task page</h2></div>
                <div className='flex gap-2'>
                    <div>
                        <Tabs defaultValue="all" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="high">High</TabsTrigger>
                                <TabsTrigger value="medium">Medium</TabsTrigger>
                                <TabsTrigger value="low">Low</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                    <div>
                        <AddTaskModal></AddTaskModal>
                    </div>
                </div>
            </div>

            {/* Card Task */}
            <div>
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TaskPage;