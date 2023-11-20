import { Button } from "@/components/ui/button";

export const Hero = () => {
    return ( 
        <header className="md:mx-36 sm:mx-10 mx-5 flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="left">
                <div className="rating sm:flex items-center hidden">
                    <img src="./Assets/star.svg" alt="Star" className="mx-[2px]" />
                    <img src="./Assets/star.svg" alt="Star" className="mx-[2px]" />
                    <img src="./Assets/star.svg" alt="Star" className="mx-[2px]" />
                    <img src="./Assets/star.svg" alt="Star" className="mx-[2px]" />
                    <img src="./Assets/star.svg" alt="Star" className="mx-[2px]" />
                    <p className="mx-[20px]">Rated 4.8/5 (243 reviews)</p>
                </div>
                <h1 className="text-5xl font-bold my-5">Create your portfolio <br /> in minutes.</h1>
                <p className="text-stone-700">With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                <div className="my-4 flex items-center sm:flex-row flex-col">
                    <Button className="p-5 sm:w-[138.94px] w-[100%] sm:m-0 my-3" size="lg">
                        Start Free Trial
                    </Button>
                    <p className="underline text-violet-700 font-bold mx-10 cursor-pointer">View Examples</p>
                </div>
                <div className="flex sm:items-center sm:flex-row flex-col">
                    <div className="flex items-center mx-4 sm:m-0 my-4">
                        <img src="./Assets/Checkmark.svg" alt="Check" />
                        <p className="mx-2 text-stone-700">No Credit Card Required</p>
                    </div>
                    <div className="flex items-center mx-4">
                        <img src="./Assets/Checkmark.svg" alt="Check" />
                        <p className="mx-2 text-stone-700">10 Free Templates</p>
                    </div>
                </div>
            </div>
            <div className="right md:w-[50rem] sm:w-96 md:m-0 mb-5 mt-[-2rem]">
                <img src="./Assets/hero-Illustration.png" alt="Hero Image" />
            </div>
        </header>
    );
}

