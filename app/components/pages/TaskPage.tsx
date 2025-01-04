import { selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import TaskCard from './module/TaskCard';
import { AddTaskModal } from './module/AddTaskModal';

const TaskPage = () => {

    const tasks = useAppSelector(selectTasks);
    console.log(tasks);
    

    return (
        <div className='max-w-7xl mx-auto p-4'>
            
            <div className='flex justify-between'>
                <div><h2>Task page</h2></div>
                <div>
                    <AddTaskModal></AddTaskModal>
                </div>
            </div>

            {/* Card Task */}
            <div>
                {
                    tasks.map( (task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TaskPage;