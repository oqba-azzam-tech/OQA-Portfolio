const Btn = ({msg , link}) => {

    return<a href={link} className="pro-btn text-[17px] cursor-pointer font-medium  duration-300 bg-accent/30 px-[15px] py-[5px] rounded-[13px] ">
            {msg}
        </a>
   
}

export default Btn