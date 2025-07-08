import React from "react";
import Link from "next/link";
import Image from 'next/image';


const OurPlace = () => {
  return (
    <div className="flex flex-row w-screen">
            <div className="w-1/2 h-screen flex justify-center items-center flex-col ">
            <div className="text-3xl font-semibold " >
                OUR PLACE
            </div>
            <div className="font-serif text-2xl ">
                Ice cream by the Sea
            </div>
            <div className="w-[400px] text-justify leading-relaxed mt-8" >
                Nestled beside the calming waves and golden sands, our shop is the perfect spot to enjoy your favorite scoop. Whether you're strolling the boardwalk or soaking in the sunset, stop by for a taste of happiness in every cone.


            </div>
            <div className="flex justify-center mt-12" >
              <button type="button" className="px-9 py-2 bg-transparent font-semibold  outline-2 outline-black hover:bg-black hover:text-white transition duration-300">MENU</button>
            </div>

        </div>
            <div className="w-1/2   ">
                    <Image src={"/place.jpg"} width={800} height={800} alt={"myimage"}/>
            </div>

    </div>
    
  );
};
export default OurPlace