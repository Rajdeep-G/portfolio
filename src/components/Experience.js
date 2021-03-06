function Experience() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-2 mt-24">
                <div className="font-medium title-font mb-4 text-bold text-blue-900 text-4xl">Experience</div>
            </div>
            <div className="text-blue-000 body-font">
                <div className="container px-5 py-24 mx-auto">
                     <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img className="rounded-full" src={process.env.PUBLIC_URL + "Assets/h.png"} />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-black text-3xl title-font font-medium mb-2">Summer Intern</h2>
                            <p className="leading-relaxed text-2xl">Hollyface Overseas Recruitment & Placement Pvt. Ltd.</p>

                            <p className="leading-relaxed text-xl pt-4">Worked as a web developer intern for a period of 3 months.
Created a brand new website of the company, along with database management, solved the deployment issues and fixed the issues of the old website.</p>
                            <a className="mt-3 text-blue-500 inline-flex items-center text-xl">June2020 - Aug2020
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-black text-3xl title-font font-medium mb-2">Freelancer Web Developer</h2>
                            <p className="leading-relaxed text-xl pt-4">Full stack web developer.Created responsive customised website for various clients. Have prior experience in Html, CSS, JS, React.js, Nuxt, Vue, Node, MongoDB, Wordpress,etc.</p>
<a className="leading-relaxed text-xl text-blue-900 pt-2 mt-4" href="https://menscript.com">Worked at - Menscript.com</a>
                                    <br></br>
                            <div className="mt-3 text-xl  text-blue-500 inline-flex items-center">Sep 2020 - Present
          
                            </div>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                           
                            <img src={process.env.PUBLIC_URL+"Assets/f2.png"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Experience;