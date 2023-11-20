import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);
    

  return (
    <div className="flex justify-between overflow-hidden">
        <div className="sm:mx-20 mx-4 my-10">
            <nav className="sm:my-10 my-5">
                <h1 className="font-bold text-2xl">Fiber</h1>
            </nav>

            <h1 className="text-4xl font-bold my-10">Create your Fiber account</h1>

            <div>
                <label htmlFor="name" className="block font-bold my-2">Your Name</label>
                <input type="text" placeholder="John Doe" id="name" className="border sm:p-4 p-3 sm:w-[100%] w-[95%] rounded-sm" />
                <label htmlFor="email" className="block font-bold my-2">E-mail</label>
                <input type="email" placeholder="john@example.com" id="email" className="border sm:p-4 p-3 sm:w-[100%] w-[95%] rounded-sm" />
                <label htmlFor="password" className="block font-bold my-2">Password</label>
                <input
                    type={visible ? "text" : "password"}
                    value={password}
                    placeholder="At least 8 characters" 
                    onChange={e => setPassword(e.target.value)}
                    id="password" 
                    className="border sm:p-4 p-3 sm:w-[100%] w-[95%] rounded-sm"
                />
            </div>

            <div 
                className="relative bottom-10 md:left-[30rem] left-[32rem]"
                role="button"
                onClick={() => setVisible(!visible)}
            >
                {
                    visible ? <Eye /> : <EyeOff />
                }
            </div>

            <div className="flex justify-center sm:items-center">
                <input 
                    type="checkbox" 
                    name="create" 
                    id="create"
                    className="mr-2 w-4 h-4"
                />
                <p>
                    By creating an account on Fiber, you agree to the 
                    <span className="underline text-violet-800 font-bold mx-1">
                        Terms & Conditions.
                    </span>
                </p>
            </div>

            <Button 
                className="w-[100%] p-7 my-4"
                onClick={() => navigate("/create-account-successful")}
            >
                Create Fiber Account
            </Button>
            <p>
                Already have an account? 
                <span className="text-violet-800 mx-2 cursor-pointer">Sign in</span>
            </p>
        </div>
        
        <div className="bg-violet-800 h-[100vh] px-32 py-20 md:flex flex-col items-center hidden">
            <img src="./Assets/Sign Up Image.png" alt="SignUpImage" className="w-[40rem]" />
            <h2 className="text-white text-3xl font-bold my-3">Unparalleled Templates</h2>
            <p className="text-center w-[30rem] text-white">Crafted by a team of professional designers, our templates are eunparalleled in the market</p>
            <div className="flex justify-center items-center my-3">
                <div className="mx-2 bg-white w-3 h-3 rounded-full cursor-pointer hover:opacity-[1] transition-all"></div>
                <div className="mx-2 bg-white opacity-[.6] w-3 h-3 rounded-full cursor-pointer hover:opacity-[1] transition-all"></div>
                <div className="mx-2 bg-white opacity-[.6] w-3 h-3 rounded-full cursor-pointer hover:opacity-[1] transition-all"></div>
                <div className="mx-2 bg-white opacity-[.6] w-3 h-3 rounded-full cursor-pointer hover:opacity-[1] transition-all"></div>
            </div>
        </div>
    </div>
  )
}

