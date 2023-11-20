import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const Home = () => {
    return (
        <div className='font-medium'>
            <div className="bg-orange-50 sm:h-[100vh] h-fit">
                <Navbar />
                <Hero />
            </div>
            <Main />
            <div className='bg-orange-50'>
                <Footer />
            </div>
        </div>
    )
} 