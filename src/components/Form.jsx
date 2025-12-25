import React from 'react';
import Btn from './Btn';

const Form = () => {
  return (
    
        <div className="mx-auto ">
            <div className="max-w-md mx-auto px-8 py-6 bg-back-ground-1 rounded-lg shadow-2">
                <h2 className="text-2xl font-semibold text-white ">Contact Us</h2>
                <div className="under-line  duration-300 w-[50px] h-0.5 my-[10px] bg-secondery mb-2 "></div>
                
            <form>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="name">Your Name</label>
                    <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300  duration-300" placeholder="Enter your name" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="email">Your Email</label>
                    <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300  duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="message">Your Message</label>
                    <textarea className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300  duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
                </div>

                <Btn msg={"Send Message"}/>
            
            </form>

            </div>
        </div>
  );
}

export default Form;
