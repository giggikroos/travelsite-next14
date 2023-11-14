'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <Image
          alt="image"
          className="object-cover row-span-3  w-full h-full p-2"
          src={'/beach-5.jpg'}
          width={3000}
          height={3000}
        />
        <Image
          alt="image2"
          className="row-span-2 object-cover w-full h-full p-2"
          src={'/beach-7.jpg'}
          width={3000}
          height={3000}
        />
        <Image
          alt="image"
          className="row-span-2 object-cover w-full h-full p-2"
          src={'/beach-1.jpg'}
          width={3000}
          height={3000}
        />
        <Image
          alt="image"
          className="row-span-3 object-cover w-full h-full p-2"
          src={'/beach-6.jpg'}
          width={3000}
          height={3000}
        />
        <Image
          alt="image"
          className="row-span-2 object-cover w-full h-full p-2"
          src={'/beach-4.jpg'}
          width={3000}
          height={3000}
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-3xl ml-10 md:ml-0 w-70 md:w-full md:text-6xl font-bold ">
          Plan Your Next Trip
        </h3>
        <p className="text-2xl py-4 leading-7 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          quisquam!
        </p>
        <p className="pb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem
          iusto tempora ipsa nulla ratione, aliquid facilis, laudantium, iure
          non sit est! Possimus, doloremque minima ipsum veritatis error
          assumenda quos!
        </p>
        <div>
          <motion.button
            whileHover={{
              scale: 1.05,
              rotate: '3deg',
              background: 'black',
              color: 'white',
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="border-black mr-4 ">
            Learn More
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.05,
              rotate: '3deg',
              backgroundColor: 'ghostwhite',
              color: 'black',
              fontStyle: 'bold',
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.15,
            }}
            className="bg-black mt-2 text-white border-black ">
            Book Your Trip
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Plan;
