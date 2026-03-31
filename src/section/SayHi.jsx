import Form from "../components/Form"
import Head from "../components/head.sec"
import { FaLocationPin,FaWhatsapp } from "react-icons/fa6";
import {  FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";


const SayHi = () => {
     const socialLink = [
            {
                name : "Instagram",
                link : "https://www.instagram.com/oqb_444/",
                icon :<FaInstagram />
            },
             {
                name : "Facebook",
                link : "https://www.facebook.com/oqba.azam",
                icon :<FaFacebookF/>
    
            },
            {
                name : "Whatsapp",
                link : "https://wa.me/963951518859",
                icon :<FaWhatsapp/>
            },
            {
                name : "Git hub",
                link : "https://github.com/oqba-azzam-tech",
                icon :<FaGithub/>
            },
            {
            name : "Email",
            link : "oqbaazzam1982m@gmail.ccom",
            icon :<SiGmail /> 
        }
        ]


        return <section className="Projects w-full p-[30px] bg-body" id="Hi">
            <Head main2={"Say Hi"} />
            <div className="center-cont flex flex-col justify-center items-center">
                <div className="my-[50px]">
                    <p className="text-4xl text-center font-black">Got a project in mind ? I'd love to hear about it. </p>
                       
                </div>
               
                <div className="flex justify-center gap-[20px] my-[50px]">
                     {socialLink.map((e , i) => <div className="hover:bg-accent-hover flex justify-center items-center duration-500 bg-secondary p-[10px] rounded-[20px]" key={i}>
                        <a href={e.link} className="text-4xl">{e.icon}</a>
                    </div>)}
                </div>
            </div>
        </section>


}

export default SayHi