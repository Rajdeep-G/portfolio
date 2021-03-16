import GitHubButton from 'react-github-btn'
function Footer() {
    return (
        <div>
            <footer className="text-black bg-white body-font">
                <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col ">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-black ">


                    </div>

                    <div className="w-4/5 mt-4 md:mt-0">
                        <span className="text-black text-xl " ><center>© 2021 Rajdeep Ghosh || Made with &#10084;&#65039;</center></span>
                    </div>
                    <div className="pt-4">
                        <GitHubButton href="https://github.com/Rajdeep-G" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @Rajdeep-G on GitHub">Follow @Rajdeep-G</GitHubButton>
                    </div>
                </div>
            </footer></div>
    )
};

export default Footer;