import React from "react";
import image from "../assets/image.png";
import RateComponent from "../components/RateComponent";
import sukuna from "../assets/sukuna.mp4";

function Home() {
  return (
    <>
      <div className="flex justify-around p-1 gap-1.5">
        <div
          className="p-2 border border-white/20 flex justify-center
"
        >
          <img src={image} alt="" />
        </div>
        <div className="backdrop-blur-md font-serif rounded-3xl bg-white/8 p-4 grid grid-cols-1">
          <p className="p-2">
            Here, you can explore detailed information about any country in the
            world—from its culture, history, and geography to population,
            economy, and key facts. Our goal is to make learning about countries
            easy, engaging, and accessible for everyone. Whether you’re a
            student, traveler, or just curious, this platform helps you discover
            the world one country at a time. Thank you for visiting our website.
            We hope you enjoy exploring and learning with us!
          </p>
          <div>
            <button className=" px-5 cursor-pointer rounded-3xl bg-white/10 p-1.5 cur">
              START EXPLORING<i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <video autoPlay muted loop>
          <source src={sukuna} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
