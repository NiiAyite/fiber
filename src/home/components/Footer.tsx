

export const Footer = () => {
    return (
        <footer className="md:mx-36 sm:mx-10 mx-5 flex justify-between p-10">
            <div>
                <h2 className="text-xl font-bold my-3">Fiber</h2>
                <p className="w-[25rem] text-stone-700">With Fiber, you can setup your own portfolio in minutes with dozens of premade, beautiful templates.</p>
                <p className="text-stone-700">Made with &#128420; in the Netherlands</p>
            </div>
            <div>
                <h2 className="text-xl font-bold my-3">Sitemap</h2>
                <ul className="text-stone-700 cursor-pointer">
                    <li>Homepage</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Features</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold my-3">Resources</h2>
                <ul className="text-stone-700 cursor-pointer">
                    <li>Support</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold my-3">Company</h2>
                <ul className="text-stone-700 cursor-pointer">
                    <li>About</li>
                    <li>Customers</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold my-3">Portfolios</h2>
                <ul className="text-stone-700 cursor-pointer">
                    <li>Sarah Andrews</li>
                    <li>Matthew Higgins</li>
                    <li>Janice Dave</li>
                </ul>
            </div>
        </footer>
    )
}