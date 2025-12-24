import React from "react";
import FactCard from "./FactCard";

function FactComponent() {
  return (
    <div>
      <h3>Facts About Different Countries</h3>
      <div className="grid grid-cols-3 gap-1 pb-32">
        <FactCard />
         <FactCard />
         <FactCard />
           <FactCard />
         <FactCard />
         <FactCard />
          <FactCard />
         <FactCard />
         <FactCard />
           <FactCard />
         <FactCard />
         <FactCard />
           <FactCard />
         <FactCard />
         <FactCard />
           <FactCard />
         <FactCard />
         <FactCard />
          <FactCard />
         <FactCard />
         <FactCard />
           <FactCard />
         <FactCard />
         <FactCard />
      </div>
    </div>
  );
}

export default FactComponent;
