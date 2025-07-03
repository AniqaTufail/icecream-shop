import React from "react";
import Link from "next/link";
import Image from 'next/image';


const DairyFree = () => {
  return (
<div
  className="h-screen bg-fixed bg-cover flex items-center justify-center"
  style={{ backgroundImage: "url('/top.jpg')" }}>
  <div>
    <div className="text-5xl text-white semi-bold text-center">Enjoy</div>
    <div className="text-[150px] text-white font-bold">Dairy Free</div>
    <div className="flex justify-center mt-8" >
        <button type="button" className="px-9 py-2 bg-white font-semibold  hover:bg-neutral-800 hover:text-white border-white transition duration-300">Order Online</button>
    </div>
            

  </div>
</div>




  );
};
export default DairyFree