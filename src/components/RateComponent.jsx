import React from "react";
import RateCard from "./RateCard";
import animeData from '../apimock/Rating.json'

function RateComponent() {
  return (
    <div className="grid grid-cols-1 gap-5 pt-5">
      <h3 className="flex justify-center items-center"><span className="rounded-3xl bg-white/20 p-1 px-7 border border-double border-black-300">Anime ratings</span></h3>
     <div> <div className="grid grid-cols-3 gap-1 pb-32">
       {animeData.map((anime)=>(<RateCard key={anime._id} data={anime}/>))}
      </div></div>
    </div>
  );
}

export default RateComponent;
