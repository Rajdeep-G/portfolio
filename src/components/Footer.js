import GitHubButton from 'react-github-btn'
function Footer() {
    return (
        <div>
            <footer className="text-black bg-white body-font ">
                <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col ">


                    <div className="flex flex-col w-full mt-4 md:mt-0 ">
                        <div className="text-black text-xl " ><center>© 2021 Rajdeep Ghosh || Made with &#10084;&#65039;</center></div>

                        <center className="mt-2"><GitHubButton href="https://github.com/Rajdeep-G" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @Rajdeep-G on GitHub">Follow @Rajdeep-G</GitHubButton>
                        </center></div>
                </div>
            </footer></div>
    )
};

export default Footer;