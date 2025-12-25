import Form from "../components/Form"
import Head from "../components/head.sec"
import { FaLocationArrow, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import {  FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SayHi = () => {

    const INFO = [
        {
            name : "Email",
            desc : "oqbaazzam1982m@gmail.ccom",
            icon :<SiGmail /> 
        },
        {
            name : "Phone",
            desc : "+963 951 518 859",
            icon : <FaPhone/>
        },
        {
            name : "Location",
            desc : "Syria , xAs-Suwayda",
            icon :<FaLocationPin/>
        },
    ]


        return <section className="Projects  w-full h-[90%] " id="Hi">
            <Head main2={"Say Hi"} desc={"Got a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together."}/>

            <div className="center-cont grid grid-cols-1 min-[992px]:grid-cols-2 ">
                <div className="order-2">
                    <Form/>
                </div>

                <div className=" flex flex-col gap-[30px] justify-center items-center order-1 min-[992px]:items-start mb-[30px] ">
                       {INFO.map((e , i) =>  <div key={i} className=" contact cursor-pointer duration-300 flex gap-[20px] text-white bg-back-ground-1 p-[20px] w-[350px] rounded-[10px] shadow-2 ">
                            <div className="w-[40px] h-[40px] rounded-[50%] bg-primary-alpha flex justify-center items-center"> {e.icon}</div>
                            <div className="contact-text">
                                <h2>{e.name}</h2>
                                <p>{e.desc}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>


}

export default SayHi