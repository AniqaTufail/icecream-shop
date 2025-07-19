import React from "react";
import Link from "next/link";
import Image from 'next/image';

const IceCreamFlavors = () => {
  const IceCreamFlavors = [
    {
      title: "OREO",
      image: "1.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "CHOCOLATE & SEA SALT",
      image: "22.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "VANILLA STRABERRY",
      image: "3.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
        {
      title: "CHERRY CHEESECAKE",
      image: "4.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "PITACHIO",
      image: "5.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "CHOCOLATE CHIP",
      image: "6.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },

    
    
    
    

  ];
  const DairyFree = [
    
    {
      title: "SALTED CARAMEL SOY",
      image: "7.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "BRAMBLEBERRY SORBET",
      image: "8.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "BANANA & HONEY",
      image: "9.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "RASPBERRY SORBET",
      image: "10.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "STRAWBERRY & COCONUT",
      image: "11.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    {
      title: "LIME SORBET",
      image: "12.png",
      description: "This is an item on your menu. Give your item a brief description.",
      price : "$9"
    },
    
    
    

  ];


  return (
    <>
    <div className="flex justify-center items-center flex-col ">
        <div className="mt-25 font-medium text-gray-900 text-3xl scale-y-150">
            ICE  CREAM  FLAVORS
        </div>
        <div className="mt-20 grid grid-cols-3 gap-x-10 gap-y-6 justify-items-center">
            {IceCreamFlavors.map((IceCreamFlavors, index)=>(
                <div key={index} className="items-center flex flex-col ">
                    <div className="w-60 h-60"><img 
                    src={IceCreamFlavors.image} 
                    alt={IceCreamFlavors.title}
                    className="w-full h-full object-cover " /></div>
                    <div className="mt-4 text-lg font-bold tracking-wide">
                        {IceCreamFlavors.title}
                    </div>
                    <div className="text-sm text-gray-700 leading-tight mt-2 max-w-[220px] text-center">
                        {IceCreamFlavors.description}
                    </div>
                    <div className="mt-3 text-md font-semibold">
                        {IceCreamFlavors.price}
                    
                    </div>
                    </div>
                    



            ))} 
           
       
          
    


            </div>
            </div>

    <div className="flex justify-center items-center flex-col mb-25 ">
        <div className="mt-25 font-medium text-gray-900 text-3xl scale-y-150">
            DAIRY FREE FLAVORS
        </div>
        <div className="mt-20 grid grid-cols-3 gap-x-10 gap-y-6 justify-items-center">
            {DairyFree.map((DairyFree, index)=>(
                <div key={index} className="items-center flex flex-col ">
                    <div className="w-60 h-60"><img 
                    src={DairyFree.image} 
                    alt={DairyFree.title}
                    className="w-full h-full object-cover " /></div>
                    <div className="mt-4 text-lg font-bold tracking-wide">
                        {DairyFree.title}
                    </div>
                    <div className="text-sm text-gray-700 leading-tight mt-2 max-w-[220px] text-center">
                        {DairyFree.description}
                    </div>
                    <div className="mt-3 text-md font-semibold">
                        {DairyFree.price}
                    
                    </div>
                    </div>
                    



            ))} 
           
       
          
    


            </div>
            </div>
            </>
        
        
     
  );
}

export default IceCreamFlavors
    //   <div className="">
    //     {cards.map((card, index) => (
    //       <div key={index} className="">
    //         <img src={card.image} alt={card.title} className="" />
    //         <div className="">

    //         </div>
    //       </div>
    //     ))}
    //   </div>