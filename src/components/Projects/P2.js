import GitHubButton from 'react-github-btn'
import Fade from 'react-reveal/Fade';

function P2() {
    return (
        <div>
            <div>

                <section class="text-black body-font  ">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">


                        <div class="lg:flex-grow md:w-1/2 lg:pl-32 mt-8 md:mt-0 md:pl-64 flex flex-col md:items-start md:text-left items-center text-center">
                            <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
                                Covid app
                </div>
                            <p class="mb-4 leading-relaxed text-2xl">Brief overview of covid19 cases across the globe.</p>

                            <div class="flex justify-center">
                                <div class="mr-4 shadow-xl inline-flex text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">React</div>
                                <div class="mr-4 inline-flex shadow-xl text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Chart.js</div>
                                <div class="inline-flex text-gray-800 shadow-xl border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Heroku</div>


                            </div>
                            <div class="mt-4"><a href="https://covid-app-rajdeep2k.herokuapp.com/" target="_blank" >
                                <button class="transform hover:scale-110 mr-4 shadow-xl inline-flex text-white bg-gray-900 py-1 px-4 rounded text-lg cursor-pointer">Click here to view Live</button>
                            </a>
                            </div>
                            <div className="mt-4">
                                <GitHubButton href="https://github.com/Rajdeep-G/covid-app" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="" data-size="large" data-show-count="false" aria-label="Star Rajdeep-G/covid-app on GitHub">View Source Code</GitHubButton>
                            </div>


                        </div>
                        <Fade right>
                            <div class="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0  ">
                                <img class="w-96 h-96 shadow-2xl object-cover object-center rounded" alt="project-1" src={process.env.PUBLIC_URL + "/Assets/projects/covid.png"} />
                            </div>
                        </Fade>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default P2;