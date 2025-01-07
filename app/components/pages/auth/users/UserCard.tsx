import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types/types";
import { Trash2 } from "lucide-react";
import { deleteUser } from "./UserSlice";


interface IProps {
    user: IUser
}

const UserCard = ({ user }: IProps) => {

    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="p-2">
                <div className="border px-5 py-3 rounded-md">
                    <div className="flex justify-between items-center">
                        <h1  >{user.name}</h1>
                        <div className="flex gap-3 items-center">
                            <Button onClick={() => dispatch(deleteUser(user.id))} variant="link" className="p-1 text-red-500">
                                <Trash2></Trash2>
                            </Button>
                        </div>
                    </div>
                    <p className="mt-5"> {user.email}</p>
                </div>

            </div>
        </div>
    );
};

export default UserCard;