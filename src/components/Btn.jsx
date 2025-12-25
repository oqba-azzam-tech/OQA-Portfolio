const Btn = ({msg , link}) => {

    return <a href={link} className="card-btn cursor-pointer font-medium relative duration-300">{msg}</a>
}

export default Btn