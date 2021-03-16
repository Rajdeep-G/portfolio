function Navbar() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav class="flex lg:w-2/5 flex-wrap items-center text-bold md:ml-auto">
                        <a class="mr-5 hover:text-gray-900 text-xl">Experience</a>
                        <a class="mr-5 hover:text-gray-900 text-xl">Projects</a>
                        <a class="mr-5 hover:text-gray-900 text-xl">Contact</a>
                        <a class="hover:text-gray-900 text-xl">Blogs</a>
                    </nav>
                    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <img src={process.env.PUBLIC_URL + "/Assets/R.png"} class="w-8 h-8 rounded-full"/>
                        <span class="ml-3 text-xl">Home</span>
                    </a>
                    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <a href={process.env.PUBLIC_URL + '/Assets/down.svg'} download className="">
                            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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