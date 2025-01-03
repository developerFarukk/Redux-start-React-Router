
import { decrement, increment } from "../../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";


const Main = () => {

const dispatch = useAppDispatch();
const { count } = useAppSelector((state) => state.counter);

// console.log(counter);

// Increment
const handleIncrement = () => {
    dispatch(increment(5))
    
}

// Decrement
const handleDecrement = () => {
    dispatch(decrement(1))
}

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <div>
                        <h2 className="text-6xl font-extrabold text-blue-600">Start Redux</h2>

                        <div>
                            <h1 className="text-2xl text-center m-4">Counter With Redux</h1>

                            <div className="flex gap-6 items-center">
                                <button onClick={ () => handleIncrement() } className="btn bg-yellow-300 text-2xl text-blue-950 p-2 font-bold m-2 rounded-2xl">Increment</button>

                                <div className="text-3xl"> {count} </div>

                                <button onClick={ () => handleDecrement() } className="bg-red-900 text-2xl text-white p-2 font-bold m-2 rounded-2xl" > Decrement </button>

                            </div>
                        </div>


                    </div>
                </header>
            </div>
        </main>
    );
};

export default Main;