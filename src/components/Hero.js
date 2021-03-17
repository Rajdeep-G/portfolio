
function Hero() {
    return (
        <div>
            {/* <div class="text-black body-font ">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center   ">
                    <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 items-center flex mx-auto   ">
                        <img alt="team" className="flex-shrink-0 rounded-full w-72 h-72 object-cover object-center mb-4" src={process.env.PUBLIC_URL + "/Assets/dp2.JPEg"}>
                        </img>
                    </div>
                    <div class="   lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">Hii, Rajdeep here... 👋</div>
                        <p class="leading-relaxed text-2xl">Frontend Web Developer trying to learn backend devlopement.💻</p>
                        <p class="leading-relaxed text-2xl">Competitive coder.⌨️</p>
                        <p class="leading-relaxed text-2xl">Open source Enthusiasist.👨‍💻</p>
                        <p class="leading-relaxed text-2xl">Love to solve CTFs.🤖</p>
                    </div>
                </div>
            </div> */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center   ">
                    <img class="   lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded-full" alt="hero" src={process.env.PUBLIC_URL + "/Assets/dp2.JPEg"}>
                    </img>
                    <div class="   w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
                        <p class="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p> */}
                        <div class="     lg:flex-grow md:w-full flex flex-col md:items-center md:text-left items-center text-center">
                            <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">Hi, Rajdeep here... 👋</div>
                            <div className="text-xl text-gray-700">I am a sophomore at IIEST, Shibpur</div>
                            <li class="text-black">
                                Stream - CST
                            </li>
                            <li class="text-black">
                                Degree- BTech
                            </li>
                            <li class="text-black">
                                Expected year of graduation- 2023
                            </li>
                            <p class="mt-4 leading-relaxed text-2xl">Frontend Web Developer trying to learn backend devlopement.💻</p>
                            <p class="leading-relaxed text-2xl">Competitive coder.⌨️</p>
                            <p class="leading-relaxed text-2xl">Open source Enthusiasist.👨‍💻</p>
                            <p class="leading-relaxed text-2xl">Love to solve CTFs.🤖</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;