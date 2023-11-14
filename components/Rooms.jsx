import Image from 'next/image';

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mg-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 ">
        <h3 className="text-2xl font-bold ">Fine Interior Rooms</h3>
        <p className="pt-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dignissimos accusantium voluptatem numquam quibusdam hic.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2 ">
        <Image
          className="object-cover w-full h-full "
          src={'/interiors-3.jpg'}
          alt="room1"
          width={4700}
          height={3100}
        />
        <Image
          className="object-cover w-full h-full row-span-2"
          src={'/interiors-2.jpg'}
          alt="room2"
          width={2700}
          height={1800}
        />
        <Image
          className="object-cover w-full h-full "
          src={'/interiors-4.jpg'}
          alt="room3"
          width={2500}
          height={3100}
        />
      </div>
    </div>
  );
};
export default Rooms;
