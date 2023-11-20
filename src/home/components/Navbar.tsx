import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return ( 
        <div className="md:mx-36 sm:mx-10 mx-5"> 
            <nav className="inter flex justify-between items-center py-8">
                <h1 className="font-bold text-2xl">Fiber</h1>

                <ul className="md:flex justify-between items-center hidden">
                    <li className="cursor-pointer font-medium mx-3">Community</li>
                    <li className="cursor-pointer font-medium mx-3">Pricing</li>
                    <li className="cursor-pointer font-medium mx-3">Features</li>
                </ul>

                <div className="md:flex justify-between items-center hidden">
                    <p className="font-bold text-md mx-3 cursor-pointer">
                        <Link to="/signup">Sign In</Link>
                    </p>
                    <Button size="default" className="text-md p-6 mx-3">
                        <Link to="/signup">Sign Up</Link>
                    </Button>
                </div>

                <Button size="icon" className="md:hidden transition-transform" onClick={() => setToggle((prev) => !prev)}>
                    <MenuIcon />
                </Button>
            </nav>

            {
                toggle && (
                    <div className="dropdown transition-transform bg-slate-100 w-fit p-10 rounded-sm absolute sm:right-10 right-5">
                        <p className="my-2 font-medium">Community</p>
                        <p className="my-2 font-medium">Pricing</p>
                        <p className="my-2 font-medium">Features</p>
                        <p className="font-bold text-md my-2 cursor-pointer">
                            <Link to="/signup">Sign In</Link>
                        </p>
                        <Button size="default" className="text-md p-6 my-2">
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </div>
                )
            }
        </div>
    );
}