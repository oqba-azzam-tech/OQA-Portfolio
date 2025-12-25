

import Pfp from "../assets/oqba6.png"

const Story = () => {
    return (
        <section className="My-Story flex justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-[70px] py-16 md:py-[70px] shadow-2" id="Story">
            <div className="center-cont flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-[40px] w-full max-w-[1400px]">
                
                # {/* Text Content */}
                <div className="text-content w-full lg:min-w-[500px] order-2 lg:order-1 text-center lg:text-left">
                    <span className="font-bold text-text-secondary text-2xl sm:text-3xl md:text-4xl">
                        Im OQBA
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-secondery mt-2 md:mt-4">
                        Front-End Developer
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-normal mt-4 md:mt-6 max-w-full lg:max-w-[600px] leading-relaxed text-white">
                        Im a Computer Engineer who codes with an artists eye.
                        <br className="hidden  sm:block" />
                        Specializing in Frontend, I turn ideas into beautiful, interactive realities.
                    </h3>
                </div>

                # {/* Image */}
                <div className="image-container order-1 lg:order-2 flex-shrink-0">
                    <div className="my-img w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] 
                                  rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img 
                            src={Pfp} 
                            alt="personal image" 
                            className="PFP w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Story