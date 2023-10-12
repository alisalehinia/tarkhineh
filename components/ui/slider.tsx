'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import FoodCard from '@/components/ui/foodCard';
import Image, { StaticImageData } from 'next/image';
import { comment } from 'postcss';
export interface FoodItem {
  image: StaticImageData;
  name: string;
  price: string;
  newPrice: string;
  discount: string;
  numberOfScores: string;
  score: string;
}
export interface comment {
  image: StaticImageData;
  name: string;
  date: string;
  text: string;
}

interface SliderProps {
  foodData?: FoodItem[];
  commentsList?: comment[];
  scroll: number;
}


const Slider: React.FC<SliderProps> = ({ foodData, commentsList, scroll }) => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const [viewPortWidth, setViewPortWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const deltaX = startX - currentX;

    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += viewPortWidth/2;
    }

    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= viewPortWidth - 28;
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += viewPortWidth - 28;
    }
  };

  return (
    <div className='relative mb-4 '>
      <div
        className='flex overflow-scroll transition-all duration-150 scroll-smooth rounded '
        style={{ overflow: 'hidden' }}
        ref={cardContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {foodData?.map((food, index) => (
          <FoodCard
            key={index}
            image={food.image}
            name={food.name}
            price={food.price}
            newPrice={food.newPrice}
            discount={food.discount}
            numberOfScores={food.numberOfScores}
            score={food.score}
          />
        ))}
        {
          commentsList?.map((comment,index)=>(
            <div key={index} className='flex-shrink-0 w-[90%] md:w-1/2 flex-col md:flex-row rounded-md border mx-1 bg-slate-50 border-slate-400 p-4 gap-4 flex justify-center items-center'>
              {/* ... Your comment card code ... */}
            </div>
          ))
        }
      </div>
      <button onClick={scrollLeft} className='absolute left-0 top-1/2'>
        <ArrowLeftIcon className='bg-white p-2 rounded-full w-10 h-10 md:ml-4 hover:bg-slate-400 hover:text-white shadow' />
      </button>
      <button onClick={scrollRight} className='absolute right-0 top-1/2'>
        <ArrowRightIcon className='bg-white p-2 rounded-full w-10 h-10 md:mr-4 hover:bg-slate-400 hover:text-white shadow' />
      </button>
    </div>
  );
};

export default Slider;
