import { useEffect, useState } from "react";
function Quiz() {
  const API_URL = "https://aniquizapi.vercel.app/api/quiz?difficulty=${level}";
const loading =false
  if (loading) {
    return <i class="ri-loader-2-fill"></i>;
  }

  return (
    <div className="flex justify-center p-4 items-center h-100">
      {" "}
      <div className="grid grid-cols-1 gap-2 border backdrop-blur-md rounded-3xl p-7 border-r-orange-50 h-90 w-800">
        {" "}
        <div className="p-4 text-3xl font-extrabold">{data.question}</div>{" "}
        <div className="grid grid-cols-2 gap-7">
          {" "}
          {Data.options.map((option) => (
            <div
              key={option}
              className="p-2 bg-white/30 rounded-3xl text-center flex justify-center items-center"
            >
              {option}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="rounded white/50 p-4">
        <button>NEXT</button>
      </div>{" "}
    </div>
  );
}

export default Quiz;
