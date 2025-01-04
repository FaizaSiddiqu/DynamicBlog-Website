import React from "react";
import Navbar from "@/components/Navbar";
import AutherCard from "@/components/AutherCard";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <div>
      
      <Navbar />
      < Feature />
      <Mega />
      <AutherCard/>
      <Footer />
     
    </div>
  );
}
