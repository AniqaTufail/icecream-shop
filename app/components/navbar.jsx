import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-yellow-200 shadow-md border-hidden  fixed top-0 left-0 w-screen z-50 ">
      <div className="w-8xl mx-5 px-3 py-6 flex justify-between">
        
        <ul className="flex gap-4 text-gray-600 font-medium">
          <li><Link href="/" className="hover:text-blue-600 font-semibold font-">FLAVORS</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 font-semibold">BOOK AN EVENT</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 font-semibold">ABOUT</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 font-semibold">RESERVATION</Link></li>
        </ul>
        <div className = " absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-align from-accent-foreground text-xl font-bold text-gray-800">Gelato</h1>  
        </div>
        <ul className="flex gap-4 text-gray-600 font-medium">
          <li><Link href="/" className="hover:text-blue-600 font-semibold font-">logIn</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 font-semibold">Cart</Link></li>
          <li><button type="button" className="px-2 py-1 bg-transparent outline-2 outline-black  hover:bg-black hover:text-white transition duration-300">Order Online</button></li>
        
        </ul>

        
      </div>
    </nav>
  );
};
export default Navbar