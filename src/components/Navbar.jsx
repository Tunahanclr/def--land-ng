import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full] h-[90px] bg-black">
      <div className="flex max-w-[1240px] mx-auto px-4 justify-between h-full items-center">
        <div>
          <h1 className="text-blue-400  select-none">DEFI</h1>
        </div>
        <div className=" hidden md:flex">
          <ul className="flex gap-5 items-center text-white">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="text-white">Use Defi</button>
          </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className="text-white text-xl cursor-pointer" />
          ) : (
            <AiOutlineMenu className="text-white text-xl cursor-pointer" />
          )}
          <div>
            {/* mobile menu */}
            <div className={nav? "bg-black w-full text-white absolute top-[90px] left-0  h-screen flex justify-center text-center flex-col":
        'absolute left-[-100%]'}>
            <ul className="flex flex-col justify-center items-center mt-4 gap-3">
              <li className="text-2xl">Platform</li>
              <li className="text-2xl">Developers</li>
              <li className="text-2xl">Community</li>
              <li className="text-2xl">About</li>
              <button className="text-white m-8 px-8">Use Defi</button>
            </ul>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
