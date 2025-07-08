import { Divide } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Menu from "./components/menu";
import DairyFree from "./components/dairyfree";
import OurPlace from "./components/ourplace";
import DeliverOnline from "./components/deliveronline";
import Dessert from "./components/dessert";
import Stripes from "./components/stripe";
import './globals.css';

export default function Home() {
  return (
   
    <>
      <Navbar/>
      <Herosection/>
      <Menu/>
      <DairyFree/>
      <OurPlace/>
      <DeliverOnline/>
      <Dessert/>
      <Stripes/>
      
    </>
    

  


      
    
    
   
  );
}
