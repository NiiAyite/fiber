import { Button } from "@/components/ui/button"

export const Main = () => {
    return (
        <main className="my-20 md:mx-36 sm:mx-10 mx-5">
            <h4 className="text-violet-800 font-bold">Why Fiber?</h4>
            <h1 className="font-bold text-3xl my-5">A good portfolio means good <br /> employability.</h1>

            <div className="flex md:flex-row flex-col justify-between md:items-center my-10">
                <div className="md:m-0 my-2">
                    <img src="./Assets/time.svg" alt="Stopwatch" className="my-3" />
                    <h6 className="font-bold my-1">Build in minutes</h6>
                    <p className="text-stone-700 sm:w-96">With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
                </div>
                <div className="md:m-0 my-2">
                    <img src="./Assets/code.svg" alt="Code" className="my-3" />
                    <h6 className="font-bold my-1">Add custom CSS</h6>
                    <p className="text-stone-700 sm:w-96">Customize your personal portfolio even more with the ability to add your own custom Css styles.</p>
                </div>
                <div className="md:m-0 my-2">
                    <img src="./Assets/allSizes.svg" alt="Stopwatch" className="my-3" />
                    <h6 className="font-bold my-1">Responsive</h6>
                    <p className="text-stone-700 sm:w-96">All Fiber templates are fully responsisve to ensure that the experience is seamless across all devices.</p>
                </div>
            </div>

            <div className="bg-violet-800 my-10 md:p-4 sm:pt-10 p-3 rounded-lg flex md:flex-row flex-col md:justify-evenly justify-between items-center">
                <div className="relative md:left-0 sm:left-[-2.5rem]">
                    <h1 className="text-white text-3xl font-bold mb-2">Diversify your portfolio.</h1>
                    <p className="text-violet-200 font-normal mb-3 sm:w-[25rem]">Create even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.</p>
                    <Button variant={"secondary"} className="font-bold p-6 text-violet-800 text-md md:w-auto w-[100%] ">Start Free Trial</Button>
                </div>
                <div className="relative top-4">
                    <img src="./Assets/Page Image.png" alt="Sample" className="md:w-[50rem] w-[30rem]" />
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center">
                <div className="border rounded-sm md:w-96 p-10 md:m-0 my-3 w-[100%]">
                    <div className="flex items-center justify-start my-2">
                        <img src="./Assets/User Avatar.svg" alt="Avatar" className="w-10" />
                        <div className="mx-3">
                            <h5 className="text-violet-800 font-bold text-sm">Sarah Andrews</h5>
                            <p className="text-sm">$100k in revenue</p>
                        </div>
                    </div>
                    <p>Setting up my portfolio with Fiber took no more than 10 minutes. Since than, my portfolio has attracted a lot of clients and made me more than $100k.</p>
                    <Button variant={"outline"} className="font-bold text-violet-800 my-2 w-[100%]">View Sarah's Portfolio</Button>
                </div>
                <div className="border rounded-sm md:w-96 p-10 md:m-0 my-3 w-[100%]">
                    <div className="flex items-center justify-start my-2">
                        <img src="./Assets/User Avatar 2.svg" alt="Avatar" className="w-10" />
                        <div className="mx-3">
                            <h5 className="text-violet-800 font-bold text-sm">Matthew Higgins</h5>
                            <p className="text-sm">$20k in revenue</p>
                        </div>
                    </div>
                    <p>I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!</p>
                    <Button variant={"outline"} className="font-bold text-violet-800 my-2 w-[100%]">View Sarah's Portfolio</Button>
                </div>
                <div className="border rounded-sm md:w-96 p-10 md:m-0 my-3 w-[100%]">
                    <div className="flex items-center justify-start my-2">
                        <img src="./Assets/User Avatar 32.svg" alt="Avatar" className="w-10" />
                        <div className="mx-3">
                            <h5 className="text-violet-800 font-bold text-sm">Janice Dave</h5>
                            <p className="text-sm">$30k in revenue</p>
                        </div>
                    </div>
                    <p>I only just started freelancing this year and have already made more than I ever made in my full-time job. The templates are so amazing.</p>
                    <Button variant={"outline"} className="font-bold text-violet-800 my-2 w-[100%]">View Sarah's Portfolio</Button>
                </div>
            </div>
        </main>
    )
}