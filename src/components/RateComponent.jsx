import React, { useState,useEffect } from "react";
import RateCard from "./RateCard";
// import animeData from '../apimock/Rating.json'
import axios from "axios";

export default function RateComponent() {
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
      let fakeLoad;//because i was getting try catch scope error and func scope issue of async fun all
      // all i want to console log fakeload
   ( async () => {
      setLoading(true);
      setError(false);
    
      try {
        const response = await axios.get(`http://localhost:3000/api/Rating`);
        setAnimeData(response.data);
      fakeLoad= setTimeout(() => {
          setLoading(false);
        }, 2000); //fake loading
        console.log(fakeLoad)
      } catch (error) {
        setError(true);
        console.log(`${error}`);
      }
    })();
        return () =>{
           if(fakeLoad) //no need still...
          {clearTimeout(fakeLoad);}}
  }, []);

  if (error) {
    return <div>server error...</div>;
  }
  if (loading) {
    return (
      <div className=" flex justify-center h-100 items-center">
        <span className="animate-pulse">
          LOADING... <i class="ri-loader-2-fill"></i>
        </span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-5 pt-5">
      <h3 className="flex justify-center items-center">
        <span className="rounded-3xl bg-white/20 p-1 px-7 border border-double border-black-300">
          Anime ratings Total:{" "}
          <span className="rounded-full text-sm p-1 border border-black-600 border-double my-1 font-extrabold bg-black/25">
            {animeData.length}
          </span>
        </span>
      </h3>
      <div>
        {" "}
        <div className="grid grid-cols-3 gap-1 pb-32">
          {animeData.map((anime) => (
            <RateCard key={anime._id} data={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}

