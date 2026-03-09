import {  FaUser } from 'react-icons/fa';
import Head from '../components/head.sec.jsx';
import Swiperr from '../components/Swiper.jsx';

const Review = () => {
    const Rev = [
        {
            name : "Thomas Rivera, Quality Assurance Manager" ,
            review : "Every line of code he wrote was clean, documented, and followed best practices. The Lighthouse scores speak for themselves."
        },
         {
            name : "Rachel Green, Entrepreneur" ,
            review : "He delivered ahead of schedule without compromising quality. In an industry where delays are common, his reliability was refreshing."
        }, {
            name : "أحمد الزهراني، مؤسس منصة تدريب" ,
            review : "تعاملنا مع عدة مطورين سابقاً، لكن هذه المرة كانت الأفضل. الفهم العميق للاحتياجات والاهتمام بالتفاصيل."
        }, {
            name : "David Chen, Lead Developer" ,
            review : "The React components he built are not just functional but beautifully architected and easily maintainable. A true professional."
        }, {
            name : "Thomas Rivera, Quality Assurance Manager" ,
            review : "He implemented our complex responsive requirements perfectly. The cross-browser compatibility was impeccable."
        },
    ]
    
    return <section className="Review m-[30px] h-[90%]" id="Review">

      <Head main2={"Review"} desc={""}/>
        <div className="center-cont">

           

            <div>
                <Swiperr Review={Rev}/>
            </div>
        </div>

    </section>
}

export default Review 