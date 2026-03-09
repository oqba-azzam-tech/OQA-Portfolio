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
            desc : "Syria , As-Suwayda",
            icon :<FaLocationPin/>
        },
    ]


        return <section className="Projects  w-full h-[90%] " id="Hi">
            <Head main2={"Say Hi"} />


            <div className="center-cont">
               
                <div className="">

                </div>

                <div className=" ">
                       {/* {INFO.map((e , i) =>  <div key={i} className="cursor-pointer duration-300 flex gap-[20px] p-[20px] w-[350px] rounded-[10px]">
                            <div className="w-[40px] h-[40px] rounded-[50%] bg-accent flex justify-center items-center"> {e.icon}</div>
                            <div className="contact-text">
                                <h2>{e.name}</h2>
                                <p>{e.desc}</p>
                            </div>
                        </div>)}  */}
                </div>
            </div>
        </section>


}

export default SayHi