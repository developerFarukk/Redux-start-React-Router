
import { Button } from "@/components/ui/button";
import logo from "../../../../public/logo.svg"
import { Link } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
    return (
        <div className="">

            <header className="bg-slate-200">

                <div className="    sm:px-6 lg:px-8 max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">

                    {/* Icon Button */}
                    <Link className="block text-teal-600" to="/">
                        <div className="flex items-center">
                            <img src={logo} alt="all" />
                            <h2 className="font-bold ml-2 text-xl">Task</h2>
                        </div>
                    </Link>

                    <div className="flex flex-1 items-center justify-center md:justify-between">
                        <nav aria-label="Global" className=" items-center justify-center">

                            <div className="flex items-center gap-6 text-lg justify-center lg:ml-24 md:ml-16 ml-12">

                                <Link className="" to="action" ><Button> Action</Button> </Link>

                                {/* Theme */}
                                <div>
                                    <ModeToggle></ModeToggle>
                                </div>
                            </div>

                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <div className="flex items-center gap-6 text-lg justify-center lg:ml-24 md:ml-16 ml-12">

                                    <Link className="" to="login" ><Button> Login </Button> </Link>

                                </div>
                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Navbar;