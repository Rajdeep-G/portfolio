function Contact() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-2">
                <div className="font-medium title-font mb-4 text-bold text-blue-800 text-3xl">Contact me</div>
            </div>
            <div class="flex flex-col text-center w-full ">
                <div class="text-2xl text-center ">

                    <div class="socials py-5" data-aos="fade-up">
                        <a
                            href="https://www.github.com/Rajdeep-G/"
                            target="_blank"
                            class="mr-4 inline-block transform hover:scale-110 mb-4 md:mb-0"
                        >
                            <img
                                // style="height: 2em"
                                className="h-16"
                                src="https://img.shields.io/badge/github-%23000000.svg?&style=for-the-badge&logo=github&logoColor=white"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rajdeep-ghosh2000rg/"

                            target="_blank"
                            class="mr-4 inline-block transform hover:scale-110 mb-4 md:mb-0"
                        >
                            <img
                                // style="height: 2em"
                                className="h-16"
                                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                            />
                        </a>
                        <a
                            href="mailto:ghoshrajdeep2000@gmail.com"
                            target="_blank"
                            class="mr-4 inline-block transform hover:scale-110"
                        >
                            <img
                                // style="height: 2em"
                                className="h-16"
                                src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white"
                            />
                        </a>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Contact;