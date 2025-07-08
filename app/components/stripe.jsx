import React from "react";
import Link from "next/link";
import Image from 'next/image';


const Stripes = () => {
  return (
    <div className="bg-diagonal-stripes h-screen flex items-center ">
        <div className="w-1/4 ">
                    <Image src={"/scoop1.png"} width={640} height={1280} alt={"myimage"}/>
        
                </div>
        <div className="w-1/4 ">
                    <Image src={"/scoop2.png"} width={640} height={1280} alt={"myimage"}/>
        
                </div>
        <div className="w-1/4 ">
                    <Image src={"/scoop3.png"} width={640} height={1280} alt={"myimage"}/>
        
                </div>
        <div className="w-1/4 ">
                    <Image src={"/scoop4.png"} width={640} height={1280} alt={"myimage"}/>
        
                </div>

    </div>



  );
};
export default Stripes