import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="backdrop-blur-sm fixed bottom-0 z-50 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-1 mb-2 px-2 ">
        <div className="flex items-center justify-center">
          {/* <ul className="grid grid-cols-2 gap-10"> */}
          <div className="pr-1">CURRENT PAGE:</div>
          <ul className="font-bold">
            <li>
             <NavLink to='/' className={({isActive})=>isActive?'':'hidden'}> <span className=" rounded-3xl bg-white/14 backdrop-blur-md p-2">Home</span></NavLink>
            </li>
            <li>
             {/* <NavLink to =''> <span className="rounded-3xl  cursor-pointer bg-white/8 p-2">About</span></NavLink> */}
            </li>
            <li>
              <NavLink to ='/Contact' className={({isActive})=>isActive?'':'hidden'}><span className="rounded-3xl backdrop-blur-md bg-white/14 p-2">Rate</span></NavLink>
            </li>
            <li>
           <NavLink to='/Ratings' className={({isActive})=>isActive?'':'hidden'}><span className="rounded-3xl backdrop-blur-md bg-white/14 p-2">Rating</span></NavLink>
            </li>
          </ul>
        </div>
        <div>   <div className="bg-white/8 p-2  cursor-pointer">
        <h3 className="font-bold">About Me</h3>
        <p className="bg-white/9 p-1 backdrop-blur-md text-sm">
          I am Pinaki Mohanty, a first-year B.Tech student. I am focused on
          building a solid foundation in programming, problem-solving, and core
          engineering concepts,and I am motivated to continuously improve my
          skills for the software industry.<br/> <span className=" ml-1 bg-white/50 px-1.5 text-sm rounded-2xl"> Copyright © 2025 KnowYourAnime.Com. All rights reserved.</span>
        </p>
      </div></div>
         <ul className="flex justify-center items-center gap-3">
            <li>
              <span className="bg-white/8 p-3 cursor-pointer rounded-full hover:-translate-y-1 
            transition-all duration-300 inline-flex">
                <i class="ri-github-line"></i>
              </span>
            </li>
            <li >
              <span className="bg-white/8 p-3 cursor-pointer rounded-full hover:-translate-y-1 
            transition-all duration-300 inline-flex">
                <i class="ri-youtube-fill"></i>
              </span>
            </li>
            <li>
              <span className="bg-white/8 p-3 cursor-pointer rounded-full hover:-translate-y-1 
            transition-all duration-300 inline-flex">
                <i class="ri-linkedin-box-fill"></i>
              </span>
            </li>
            <li>
              <span className="bg-white/8 p-3 cursor-pointer rounded-full hover:-translate-y-1 
            transition-all duration-300 inline-flex">
                <i class="ri-instagram-fill "></i>
              </span>
            </li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
