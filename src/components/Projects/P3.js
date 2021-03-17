import GitHubButton from 'react-github-btn'
import Fade from 'react-reveal/Fade';
function P3() {
    return (
        <div>

            <section className="text-black body-font     ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">
                    <Fade left>
                        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0  ">
                            <img className="h-96 w-96 shadow-2xl object-fit object-center rounded" alt="project-1" src={process.env.PUBLIC_URL + "/Assets/projects/kt.png"} />
                        </div>
                    </Fade>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-32 mt-8 md:mt-0 flex flex-col md:items-start md:text-left items-center text-center">
                        <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
                            Kronos Tracker
                            </div>
                        <p className="mb-4 leading-relaxed text-2xl">A modern todo management tool that groups tasks on the basis of priority levels, comes with features of Google schedule, a timer with white noise for focussed work, awesome progress reports, and points for motivation and improved producitvity.</p>

                        <div className="flex justify-center">
                            <div className="mr-4 shadow-xl inline-flex text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">React</div>
                            <div className="mr-4 inline-flex shadow-xl text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Tailwind css</div>
                            <div className="inline-flex text-gray-800 shadow-xl border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Firebase</div>


                        </div>
                        <div className="mt-4"><a href="https://kronos-tracker.vercel.app/" target="_blank" >
                            <button className="transform hover:scale-110 mr-4 shadow-xl inline-flex text-white bg-gray-900 py-1 px-4 rounded text-lg cursor-pointer">Click here to view Live</button>
                        </a>
                        </div>
                        <div className="mt-4">
                            <GitHubButton href="https://github.com/Rajdeep-G/Kronos-Tracker" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="" data-size="large" data-show-count="false" aria-label="Star Rajdeep-G/Kronos-Tracker on GitHub">View Source Code</GitHubButton>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    )
}

export default P3;