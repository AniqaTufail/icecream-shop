import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Dessert = () => {
  return (
    <div className="flex flex-row">
        <div className="w-1/2 ">
             <Image src={"/dessert.png"} width={947} height={807} alt={"myimage"}/> 
        </div>

        <div className="w-1/2 flex justify-center items-center flex-col ">
            <div className="text-3xl font-semibold " >
                DESSERTS
            </div>
            <div className="font-serif text-2xl ">
                Sweet Treats That Melt Hearts
            </div>
            <div className="w-[400px] text-justify leading-relaxed mt-8" >
                Indulge in our dreamy selection of ice cream delights, where every bite is a mini-vacation. From creamy classics to bold new flavors, we have got your sweet tooth covered. Life is short—eat dessert first!
            <div className="flex justify-center mt-12" >
              <button type="button" className="px-9 py-2 bg-transparent font-semibold  outline-2 outline-black hover:bg-black hover:text-white transition duration-300">MENU</button>
            </div>

        </div>

    </div>
    </div>

  );
};
export default Dessert