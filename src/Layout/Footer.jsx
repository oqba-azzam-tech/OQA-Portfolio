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
    <section className="footer my-[50px]">
        <div className="center-cont flex flex-col justify-center items-center gap-[30px]">
                <div className="bg-secondary py-[20px] px-[15px] rounded-[20px]">
                <p className="">Copyright ©{Year} | OqbaAZ. </p>
                </div>
           
        </div>
    </section>
    </>
}

export default Footer