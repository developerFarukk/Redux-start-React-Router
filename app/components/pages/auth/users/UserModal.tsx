import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { addUser } from "./UserSlice";

const UserModal = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit,  formState: { errors } } = useForm<IUser>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addUser(data as IUser))
        // console.log(data);
        
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                    </DialogHeader>

                    {/* Form Page */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Inpute User Name */}
                        <div className="p-1">
                            <Label className="">Name</Label>
                            <Input type="text" placeholder="Inpute User Name" {...register("name", { required: "User Name is required" })} />
                            <div className="flex justify-end mt-1">
                                <Label className={errors.name ? "text-red-700 text-sm" : "hidden"}>{errors.name?.message}</Label>
                            </div>
                        </div>

                        {/* Inpute User email */}
                        <div className="p-1">
                            <Label className="">Email</Label>
                            <Input type="email" placeholder="Inpute User Email" {...register("email", { required: "email is required" })} />
                            <div className="flex justify-end mt-1">
                                <Label className={errors.email ? "text-red-700 text-sm" : "hidden"}>{errors.email?.message}</Label>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="p-1 mt-2">
                            <DialogFooter>
                                <Button type="submit" >Submit</Button>
                            </DialogFooter>
                        </div>

                    </form>

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UserModal;