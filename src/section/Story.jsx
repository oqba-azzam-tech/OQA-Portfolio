import Pfp from "../assets/oqba6.png"

const Story = () => {
    return  <section className="My-Story flex justify-center items-center w-full p-[80px]  " id="Story">

        <div className="center-cont flex justify-center max-[1020px]:flex-col max-[1020px]:items-center min-[1020px]:justify-center gap-[40px]">

            <div className="min-w-[500px] max-[1017px]:order-2">
               
                <span className=" font-bold text-text-secondry text-4xl max-[1120px]:text-3xl max-[520px]:text-[16px]">
                    I'm OQBA
                </span>
                <h1 className="text-6xl font-semibold text-secondery w-fit max-[1120px]:text-5xl max-[520px]:text-3xl">
                    Front-End Devoloper 
                </h1>
                <h3 className="text-3xl text-text-secondry font-normal max-w-[600px] max-[1120px]:text-2xl max-[520px]:text-[16px] ">
                    I’m a Computer Engineer who codes with an artist’s eye.<br/>
                    Specializing in Frontend, I turn ideas into beautiful, interactive realities.
                </h3>
            </div>

            <div className="my-img w-[400px] h-[400px] max-[1200px]:h-[300px] max-[1200px]:w-[300px] 
            rounded-[50%] my-pic overflow-hidden flex justify-end max-[1017px]:order-1">
                <img src={Pfp} alt="personal image" className="img-grey w-full h-full object-cover object-center "/>
            </div>
            
        </div>

    </section>
}

export default Story