
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { addTask } from "@/redux/features/task/taskSlice"
import { useAppDispatch } from "@/redux/hook"
import type { DraftTask, ITask, priorityEnam } from "@/types/types"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddTaskModal() {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, setValue, watch, formState: { errors }, control } = useForm<DraftTask>({
        defaultValues: {
            dueDate: new Date(),
        },
        mode: "onBlur",
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addTask(data as ITask))
    };

    const selectedPriority = watch("priority");
    // const selectedDate = watch("dueDate");

    const handleDateChange = (date: Date | undefined) => {
        if (date) {
            setValue("dueDate", date);
        }
    };

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
                        <Label className="p-1">Priority</Label>
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

                    {/* Date Picker */}
                    <div className="flex flex-col mt-2">
                        <Label className="p-1">Due Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"

                                    className={cn(
                                        "pl-3 text-left font-normal",
                                        !watch("dueDate") && "text-muted-foreground"
                                    )}
                                >
                                    {watch("dueDate")
                                        ? format(new Date(watch("dueDate")), "PPP")
                                        : "Pick a date"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={watch("dueDate") ? new Date(watch("dueDate")) : undefined}
                                    onSelect={(date) => {
                                        if (date) {
                                            setValue("dueDate", date, {
                                                shouldValidate: true,
                                            });
                                        }
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                        {errors.dueDate && (
                            <Label className="text-red-700 text-sm mt-1">
                                {errors.dueDate.message}
                            </Label>
                        )}
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

