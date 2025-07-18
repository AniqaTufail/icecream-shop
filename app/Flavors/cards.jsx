import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Cards = () => {
  const cards = [
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards