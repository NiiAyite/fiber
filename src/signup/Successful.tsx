import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Successful = () => {
    const navigate = useNavigate();
  return (
    <div className="text-violet-800 flex flex-col justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center">
            <CheckCircle2 className="w-10 h-10 mx-2" />
            <h1 className="text-3xl font-bold">Your account has been created successfully</h1>
        </div>
        <Button 
            onClick={() => navigate("/")}
            className="w-fit p-4 my-5"
        >
            Back to Homepage
        </Button>
    </div>
  )
}
