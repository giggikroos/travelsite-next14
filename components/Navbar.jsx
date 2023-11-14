'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const controls = useAnimationControls();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    controls.start('activated');

    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
      controls.start('deactivated');
    }
  };
  return (
    <div className=" p-3 absolute mb-12 top-0 w-full flex justify-between items-center ">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <motion.button
        variants={{
          activated: {
            rotate: '90deg',
          },
          initial: {
            rotate: '0deg',
          },
          deactivated: {
            rotate: '0deg',
          },
        }}
        initial="initial"
        exit={{
          rotate: '0deg',
        }}
        animate={controls}
        className="z-20 cursor-pointer"
        onClick={handleNav}>
        <HiMenuAlt3 className=" text-white cursor-pointer" size={25} />
      </motion.button>

      <div className="bg-black/10 z-10 absolute top-0 left-0 w-full h-full" />

      <div
        className={
          nav
            ? 'fixed z-10 ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col'
            : 'absolute top-0 h-full left-[-100%] ease-out duration-500 z-10'
        }>
        <ul className="flex flex-col fixed w-full h-full items-center justify-center ">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
