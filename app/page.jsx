import { Divide } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Menu from "./components/menu";
import DairyFree from "./components/dairyfree";
import OurPlace from "./components/ourplace";

export default function Home() {
  return (
   
    <>
      <Navbar/>
      <Herosection/>
      <Menu/>
      <DairyFree/>
      <OurPlace/>
    </>
    

  


      
    
    
   
  );
}
