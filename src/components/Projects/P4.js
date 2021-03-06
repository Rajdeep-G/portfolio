import GitHubButton from 'react-github-btn'
import Fade from 'react-reveal/Fade';

function P4() {
    return (
        <div>
            <div>

                <section className="text-black body-font      ">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">


                        <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0 lg:pl-32 flex flex-col md:items-start md:text-left items-center text-center">
                            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
                                Space invaders
                </div>
                            <p className="mb-4 leading-relaxed text-2xl">A simple game built using python and pygames</p>

                            <div className="flex justify-center">
                                <div className="mr-4 shadow-xl inline-flex text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Python</div>
                                <div className="mr-4 inline-flex shadow-xl text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Pygames</div>


                            </div>

                            <div className="mt-4">
                                <GitHubButton href="https://github.com/Rajdeep-G/pygames" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="" data-size="large" data-show-count="false" aria-label="Star Rajdeep-G/pygames on GitHub">View Source Code</GitHubButton>
                            </div>


                        </div>
                        <Fade right>
                            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0  ">
                                <img className="h-96 w-96 shadow-2xl object-fit object-center rounded" alt="project-1" src={process.env.PUBLIC_URL + "/Assets/projects/space1.PNG"} />
                            </div>
                        </Fade>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default P4;