'use client';
import { useState } from 'react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiDotsCircleHorizontal,
  HiDotsVertical,
} from 'react-icons/hi';

const ImageSlider = () => {
  const slides = [
    {
      url: '/cuisine-1.jpg',
      title: 'cuisine 1',
    },
    {
      url: '/cuisine-2.jpg',
      title: 'cuisine 2',
    },
    {
      url: '/cuisine-3.jpg',
      title: 'cuisine 3',
    },
    {
      url: '/cuisine-4.jpg',
      title: 'cuisine 4',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full  rounded-2xl bg-center bg-cover duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer">
        <HiChevronLeft onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer">
        <HiChevronRight onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}>
            <HiDotsCircleHorizontal color="gray" size={25} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
