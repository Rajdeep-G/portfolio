function Hero() {
    return (
        <div>
            <div class="text-gray-600 body-font border border-red-800">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-red-800">
                    <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 items-center flex mx-auto border border-red-800">
                        <img alt="team" className="flex-shrink-0 rounded-full w-72 h-72 object-cover object-center mb-4" src={process.env.PUBLIC_URL + "/Assets/dp2.JPEg"}>
                        </img>
                    </div>
                    <div class="border border-red-800 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hii, Rajdeep here... 👋</div>
                        <p class="leading-relaxed text-2xl">Frontend Web Developer trying to learn backend devlopement.💻</p>
                        <p class="leading-relaxed text-2xl">Competitive coder.⌨️</p>
                        <p class="leading-relaxed text-2xl">Open source Enthusiasist.👨‍💻</p>
                        <p class="leading-relaxed text-2xl">Love to solve CTFs.🤖</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;