import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="bg-black">
        <div className="w-1/2 h-3/12  ">
            <Image src={"/menu.png"} width={947} height={807} alt={"myimage"}/>
        </div>

    </div>

  );
};
export default Menu