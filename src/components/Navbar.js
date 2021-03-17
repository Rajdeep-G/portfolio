import { Link as ScrollLink } from 'react-scroll'
function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            <header className="text-gray-100 body-font bg-indigo-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-bold md:ml-auto  ">
                        <ScrollLink to="AllProjects" spy={true} smooth={true} duration={500}><span className="mr-5 hover:text-gray-900 text-2xl cursor-pointer">Projects</span></ScrollLink>
                        <ScrollLink to="Experience" spy={true} smooth={true} duration={500}><span className="mr-5 hover:text-gray-900 text-2xl cursor-pointer">Experience</span></ScrollLink>

                        <ScrollLink to="Contact" spy={true} smooth={true} duration={500}><span className="mr-5 hover:text-gray-900 text-2xl cursor-pointer">Contact</span></ScrollLink>


                        {/* <a className="hover:text-gray-900 text-2xl">Blogs</a> */}
                    </nav>
                    <ScrollLink to="Hero" spy={true} smooth={true} duration={500} className=" cursor-pointer  hover:text-gray-900 flex text-3xl order-first lg:order-none lg:w-1/5 title-font items-center text-gray-100 lg:items-center lg:justify-center mb-4 md:mb-0">


                        <img src={process.env.PUBLIC_URL + "/Assets/R2.png"} className="w-8 h-8 mt-3 rounded-full" />
                        <span className="ml-3 text-4xl">Home</span>
                    </ScrollLink>
                    <div className="   lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <a href={process.env.PUBLIC_URL + '/Assets/cv.pdf'} download className="">
                            <button className="inline-flex items-center text-blue-900 text-xl bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-900 hover:text-gray-100 rounded mt-4 md:mt-0">
                                Resume
                                <img src={process.env.PUBLIC_URL + "/Assets/down.svg"} className="h-4 w-6 ml-2" />
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;