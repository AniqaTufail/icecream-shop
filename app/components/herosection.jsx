import React from "react";
import Link from "next/link";
import Image from 'next/image';
const Herosection = () => {
  return (
    <div className="bg-yellow-200 w-screen h-screen bg-cover  flex items-center justify-center mt-0 shadow-lg">
       <div className="w-screen flex justify-center items-center relative">
        <div className="w-[300px] ">
            <Image src={"/hero.png"} width={640} height={1280} alt={"myimage"}/>

        </div>
        
        
        
         <div className=" absolute  top-[40%] flex flex-col ">
            <div className="-translate-y-[-10%] px-[37%] text-shadow-2xs font-semibold text-3xl text-white">  
                Hand Crafted
                </div>
            <div className="font-extrabold text-white text-[12rem]"> 
                Ice Cream
            </div>
            <div className="flex justify-center" >
              <button type="button" className="px-9 py-2 bg-transparent font-semibold  outline-2 outline-black">Our Flavors</button>
            </div>
            
        </div> 
        </div> 
        
      
    </div>

  );
};
export default Herosection