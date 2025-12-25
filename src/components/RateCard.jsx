import React from "react";

function RateCard({data}) {
  return (
    <div className=" p-3 rounded-2xl grid grid-cols-1 gap-1 bg-white/10">
      <div className="flex  justify-center items-center"><span className="p-1.5 text-font-bold bg-black/50 rounded-full"><i class="ri-bard-fill"></i>{data.rating}</span><div className="p-1.5">{data.animename}</div></div>
      <div>
        <p className=" p-1 rounded-sm backdrop-blur-md">{data.message}</p>
      </div>
      <div className="bg-black/30 rounded-3xl p-2 text-center">{data.email}</div>
    </div>
  );
}

export default RateCard;
