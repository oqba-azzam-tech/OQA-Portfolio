import {  FaUser } from 'react-icons/fa';
import Head from '../components/head.sec.jsx';

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

            <div className='grid grid-cols-1  min-[670px]:gap-[10] min-[670px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-[30px]'>
              
                {Rev.map(( e  , i) =>  <div key={i} className="rev-card duration-300 max-w-sm bg-back-ground-1 rounded-lg shadow-lg shadow-2 p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="text-xl text-white font-bold mb-1">{e.name}</div>
                        </div>
                      </div>
                      <div className="flex text-secondery text-xl">★★★★</div>
                      <p className="text-gray-300 mb-4 font-light text-[15px]">
                        {e.review}
                      </p>
                    </div> )}
            </div>
        </div>

    </section>
}

export default Review 