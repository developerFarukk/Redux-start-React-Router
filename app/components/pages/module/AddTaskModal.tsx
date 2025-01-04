
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    // DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import { useForm } from "react-hook-form"
// import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
// import { Input } from "@/components/ui/input";
// import { useForm, type SubmitHandler } from "react-hook-form";

// type Inputs = {
//     title: string
// }

export function AddTaskModal() {

    // const {handleSubmit, register,watch, formState: { errors }, form} = useForm<IArguments>();

    // const form = useForm()

    // const onSubmit = (data: any) => {
    //     console.log(data);
        
    // }

    // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    // console.log(watch("example"))

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
                {/* <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || "" }></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form> */}


            </DialogContent>
        </Dialog>
    )
}
