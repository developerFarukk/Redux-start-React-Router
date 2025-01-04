import { selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import TaskCard from './module/TaskCard';

const TaskPage = () => {

    const tasks = useAppSelector(selectTasks);
    console.log(tasks);
    

    return (
        <div className='max-w-7xl mx-auto p-4'>
            <p>This is Task Page</p>

            {/* Card Task */}
            <div>
                {
                    tasks.map( (task) => (
                        <TaskCard task={task} ></TaskCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TaskPage;