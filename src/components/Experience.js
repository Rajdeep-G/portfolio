function Experience() {
    return (
        <div>
            {/* <div class="text-bold text-blue-800 text-3xl flex justify-items-center border border-red-800">Experienace</div> */}
            <div className="flex flex-col text-center w-full mb-2">
                <div className="font-medium title-font mb-4 text-bold text-blue-800 text-3xl">Experience</div>
            </div>
            <div class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img class="rounded-full" src={process.env.PUBLIC_URL+"Assets/h.png"}/>
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Summer Intern</h2>
                            <p class="leading-relaxed text-base">Hollyface Overseas Recruitment & Placement Pvt. Ltd.</p>

                            <p class="leading-relaxed text-base pt-4">Worked as a web developer intern for a period of 3 months.
Created a brand new website of the company, along with database management, solved the deployment issues and fixing the issues of the old website.</p>
                            <a class="mt-3 text-blue-500 inline-flex items-center">June2020 - Aug2020
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Freelancer Web Developer</h2>
                            <p class="leading-relaxed text-base pt-4">Full stack web developer || I can create a responsive customised website for you. ||
Have prior experience in Html, CSS, JS, React.js, Nuxt, Vue, Node, MongoDB, Wordpress,etc.</p>
<p class="leading-relaxed text-base pt-2">Worked with - Menscript</p>

                            <a class="mt-3 text-blue-500 inline-flex items-center">Sep 2020 - Present
          
                            </a>
                        </div>
                        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg> */}
                            <img src={process.env.PUBLIC_URL+"Assets/f2.png"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Experience;