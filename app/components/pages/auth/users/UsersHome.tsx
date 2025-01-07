import { AddTaskModal } from "../../module/AddTaskModal";
import UserModal from "./UserModal";



const UsersHome = () => {

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className='flex justify-between'>
                <div><h2>Users page</h2></div>
                <div className='flex gap-2'>
                    {/* <div>
                        <Tabs defaultValue="all" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger onClick={() => dispatch(updateFilter(filterTask.All))} value="all">All</TabsTrigger>
                                <TabsTrigger onClick={() => dispatch(updateFilter(filterTask.High))} value="high">High</TabsTrigger>
                                <TabsTrigger onClick={() => dispatch(updateFilter(filterTask.Medium))} value="medium">Medium</TabsTrigger>
                                <TabsTrigger onClick={() => dispatch(updateFilter(filterTask.Low))} value="low">Low</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div> */}
                    <div>
                        <UserModal></UserModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersHome;