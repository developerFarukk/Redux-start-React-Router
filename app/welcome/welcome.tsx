import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div>
            <h2 className="text-6xl font-extrabold text-blue-600">Start Redux</h2>

            <div>
              <h1 className="text-2xl text-center m-4">Counter With Redux</h1>

              <div className="flex gap-6 items-center">
                <button className="bg-yellow-300 text-2xl text-blue-950 p-2 font-bold m-2 rounded-2xl">Increment</button>

                <div className="text-3xl"> 0 </div>

                <button className="bg-red-900 text-2xl text-white p-2 font-bold m-2 rounded-2xl" > Decrement </button>

              </div>

            </div>


          </div>
        </header>
      </div>
    </main>
  );
}

