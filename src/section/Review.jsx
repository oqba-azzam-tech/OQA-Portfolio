import {  FaUser } from 'react-icons/fa';
import Head from '../components/head.sec.jsx';
import Swiperr from '../components/Swiper.jsx';
import 'lord-icon-element';

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
    
    return <section className="Review h-[90%] p-[30px]" id="Review">

      <div className='rev-head bg-secondary border-l-4 border-b-[1px] border-accent py-[10px] rounded-[20px] my-[40px]'>
        <Head main2={"Review"} />
      </div>
      
        <div className="center-cont">

            <div>
                <Swiperr Review={Rev}/>
            </div>
        </div>

    </section>
}

export default Review 