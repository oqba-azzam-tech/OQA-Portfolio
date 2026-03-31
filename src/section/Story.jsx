import Pfp from "../assets/oqba6.png"

const Story = () => {
    return  <section className="My-Story   w-full py-[80px]"id="Story">
            <div className="center-cont">

                        <div className=" flex justify-center items-center gap-[60px] text-text-primary">


                        <div >
                            <div className="bg-secondary p-[20px] rounded-[30px] border-l-4 border-accent border-b" >
                                <p className=" max-w-[500px] text-[27px]">Hi I'm 
                                    <span className="mx-[10px]">OQBA AZZAM</span>
                                    Front-End Software Engineer focused on building scalable and high-performance web applications using React and modern JavaScript
                                </p>
                            </div>

                        </div>

                        <div className="my-img w-[400px] h-[400px] max-[1200px]:h-[300px] max-[1200px]:w-[300px] 
                        rounded-[50%] my-pic overflow-hidden flex justify-end max-[1017px]:order-1">
                            <img src={Pfp} alt="personal image" className="img-grey w-full h-full object-cover object-center "/>
                        </div>
                            
                    </div>

            </div> 
    </section>
}

export default Story