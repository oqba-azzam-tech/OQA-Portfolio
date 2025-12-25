import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {

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
            link : "https://wa.me/963951518859",
            icon :<FaGithub/>
        },
    ]

    const Year = new Date().getFullYear()

    return <>
    <section className="footer  bg-back-ground my-[50px]">
        <div className="center-cont flex flex-col justify-center items-center gap-[30px]">
            
                <div className="flex flex-row justify-center text-[30px] gap-[15px]">
                        {socialLink.map((e , i) => <div className="icons  shadow-2 text-text-secondry bg-primary-alpha w-[40px] h-[40px] rounded-[50%] flex justify-center items-center duration-300" key={i}>
                        <a href={e.link}>{e.icon}</a>
                    </div>)}
                </div>
                <div>
                <p className=" text-text-secondry">Copyright ©{Year} | OAZ </p>
                </div>
           
        </div>
    </section>
    </>
}

export default Footer