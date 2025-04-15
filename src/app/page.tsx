"use client"
import About from "@/components/About/About";
import BootLoading from "@/components/Booting/BootLoading";
import Landing from "@/components/landing/Landing";
import { useEffect, useState } from "react";

export default function Home() {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    
    setTimeout(() => {

      setLoading(false);
      
    }, 13500);

  }, [])
  
  return (
    
      <About/>
    
   
  );
}
