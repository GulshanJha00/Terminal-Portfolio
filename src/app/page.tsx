"use client"
import BootLoading from "@/components/Booting/BootLoading";
import Landing from "@/components/landing/Landing";
import { useEffect, useState } from "react";

export default function Home() {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    
    setTimeout(() => {

      setLoading(false);
      
    }, 13500);

  }, [])
  
  return (
    
      Loading?<BootLoading/> : 
      
      (<Landing/>)
    
   
  );
}
