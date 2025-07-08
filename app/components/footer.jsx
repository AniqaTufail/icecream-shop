import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="h-[500px] w-screen bg-black text-white flex justify-items-center  justify-evenly">
        <div className="mt-30">
            <div className=" text-2xl">
                Adress
            </div>
            <div className="mt-3">
                500 Terry Francine St.<br/>San Francisco,<br/>CA 94158
            </div>
        </div>
        <div className="mt-30">
            <div>
                Contact
            </div>
            <div className="mt-3">
                info@mysite.com
            </div>
            <div>
                Tel: 123-456-7890
            </div>
        </div>
        <div className="mt-30">
            <div>Hours</div>
            <div className="mt-3">
                OPEN DAILY<br/>10AM-10PM
            </div>
        </div>
          <div className="flex flex-col mt-30">
            <div>Mailing List</div>

        <div className="block mb-2 text-sm mt-3">Enter your email here *</div>
        <div>
            <input
          type="email"
          className="w-full p-2 bg-black border border-white text-white placeholder:text-white focus:outline-none"
          
        />

        </div>
        
        <div className="flex   flex-col mt-3">
        <div><input type="checkbox" id="newsletter" className="w-3 h-3  bg-black border border-white text-white accent-whit" />
            <label htmlFor="newsletter" className="text-sm ml-1">
    Yes, subscribe me to your newsletter. *
  </label>

            </div>
        
        <div className="mt-2 ">
            <button className="px-2 py-2 w-full border border-white w-full text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
        SUBSCRIBE
      </button>
            </div>
        <div className="flex justify-start space-x-4 pt-4">
        <FaFacebookF className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        <FaTwitter className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        <FaInstagram className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
      </div>

      </div>
      </div>

    


 
    </div>

   






  );
};
export default Footer