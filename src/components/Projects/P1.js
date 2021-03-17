import GitHubButton from 'react-github-btn'
import Fade from 'react-reveal/Fade';
function P1() {
    return (
        <div>

            <section class="text-black body-font  ">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">
                    <Fade left>
                        <div class="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0  ">
                            <img class="h-96 w-96 shadow-2xl object-fit object-center rounded" alt="project-1" src={process.env.PUBLIC_URL + "/Assets/projects/1.PNG"} />
                        </div>
                    </Fade>

                    <div class="lg:flex-grow md:w-1/2 lg:pl-32 mt-8 md:mt-0 md:pl-64 flex flex-col md:items-start md:text-left items-center text-center">
                        <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
                            Cf bot (for Discord)
                            </div>
                        <p class="mb-4 leading-relaxed text-2xl">Discord bot to provide quick happenings in Codeforces</p>

                        <div class="flex justify-center">
                            <div class="mr-4 shadow-xl inline-flex text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Discord.js</div>
                            <div class="mr-4 inline-flex shadow-xl text-gray-800 border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Javascript</div>
                            <div class="inline-flex text-gray-800 shadow-xl border border-gray-800 py-1 px-4 rounded text-lg cursor-default">Heroku</div>


                        </div>

                        <div className="mt-4">
                            <GitHubButton href="https://github.com/Rajdeep-G/Cf-bot" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="" data-size="large" data-show-count="false" aria-label="Star Rajdeep-G/Cf-bot on GitHub">View Source Code</GitHubButton>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    )
}

export default P1;