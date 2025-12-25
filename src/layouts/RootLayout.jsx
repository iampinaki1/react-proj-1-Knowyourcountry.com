import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FactCard from "../components/RateCard";
import FactComponent from "../components/RateComponent";
function RootLayout() {
  return (
   <div className="min-h-screen flex flex-col">
          <Header />
    
   {/* // outlet nahi dega load nahi hoga its like a variable component */}
    <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <div className="border-2"></div>
    
      <Footer />
   </div>
  );
}

export default RootLayout;
