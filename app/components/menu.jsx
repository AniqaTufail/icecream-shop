import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="flex flex-row">
        <div className="w-1/2 ">
             <Image src={"/menu.png"} width={947} height={807} alt={"myimage"}/> 
        </div>

        <div className="w-1/2 flex justify-center items-center flex-col ">
            <div className="text-3xl font-semibold " >
                OUR FLAVORS
            </div>
            <div className="font-serif text-2xl ">
                Fresh n Tasty!
            </div>
            <div className="w-[400px] text-justify leading-relaxed mt-8" >
                Dive into a world of creamy delights! From classic vanilla to bold bubblegum swirls,every scoop is handcrafted to chill your taste buds and warm your heart.Pick your favorite — or try them all!
            </div>
            <div className="flex justify-center mt-12" >
              <button type="button" className="px-9 py-2 bg-transparent font-semibold  outline-2 outline-black hover:bg-black hover:text-white transition duration-300">MENU</button>
            </div>

        </div>

    </div>

  );
};
export default Menu