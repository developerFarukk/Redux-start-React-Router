import { useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "../../module/AddTaskModal";
import UserModal from "./UserModal";
import { selectUsers } from "./UserSlice";
import UserCard from "./UserCard";


const UsersHome = () => {

    // const dispatch = useAppDispatch();

     const users = useAppSelector(selectUsers);

    return (
        <div className="max-w-7xl mx-auto p-4">

            <div className='flex justify-between'>
                <div><h2>Users page</h2></div>
                <div className='flex gap-2'>
                    <div>
                        <UserModal></UserModal>
                    </div>
                </div>
            </div>

            {/* Card Tasks */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                {
                    users.map((user) => (
                        // <userCard task={task} key={task.id}></userCard>
                        <UserCard user={user} key={user.id} ></UserCard>
                    ))
                }
            </div>

        </div>
    );
};

export default UsersHome;