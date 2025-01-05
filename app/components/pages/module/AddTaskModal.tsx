
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { useForm, type SubmitHandler } from "react-hook-form"

enum priorityEnam {
    high = "High",
    medium = "Medium",
    low = "Low",
}

interface ITaskInput {
    title: string
    description: string
    priority: priorityEnam
}

export function AddTaskModal() {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ITaskInput>()

    const onSubmit: SubmitHandler<ITaskInput> = (data) => {
        console.log(data);
    };

    const selectedPriority = watch("priority");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                </DialogHeader>

                {/* Form Page */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Inpute Title */}
                    <div className="p-1">
                        <Label className="">Title</Label>
                        <Input placeholder="Inpute task title" {...register("title", { required: "Title is required" })} />
                        <div className="flex justify-end mt-1">
                            <Label className={errors.title ? "text-red-700 text-sm" : "hidden"}>{errors.title?.message}</Label>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="p-1">
                        <Label>Description</Label>
                        <Textarea placeholder="Inpute task description"  {...register("description", { required: "Description is Required" })} />
                        <div className="flex justify-end mt-1">
                            <Label className={errors.title ? "text-red-700 text-sm" : "hidden"}>{errors.description?.message}</Label>
                        </div>
                    </div>

                    {/* Select Priority */}
                    <div className="p-1 mt-2">
                        <Select onValueChange={(value: priorityEnam) => setValue("priority", value)} value={selectedPriority} required >
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup  >
                                    <SelectLabel>Select Priority</SelectLabel>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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
    )
}

