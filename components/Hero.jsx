import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full h-screen mb-11 ">
      <Image
        className="w-full h-screen object-cover"
        fill={true}
        src={'/beach-2.jpg'}
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="text-xl font-bold font-Neue">All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="font-[roboto] max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            cumque repudiandae esse vel laudantium distinctio sunt doloribus
            tenetur dolorum porro!
          </p>
          <button className="bg-white text-black hover:bg-transparent hover:text-white transition-colors font-[roboto] font-bold">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
