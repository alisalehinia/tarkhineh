import React, { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import FoodCard from '@/components/ui/foodCard';
import { StaticImageData } from 'next/image';

export interface FoodItem {
  image: StaticImageData;
  name: string;
  price: string;
  newPrice: string;
  discount: string;
  numberOfScores: string;
  score: string;
}

interface SliderProps {
  foodData: FoodItem[];
}

const Slider: React.FC<SliderProps> = ({ foodData }) => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 440;
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 440;
    }
  };

  return (
    <div className='relative mb-4 '>
      <div
        className='flex overflow-scroll transition-all duration-150 scroll-smooth  rounded '
        style={{ overflow: 'hidden' }}
        ref={cardContainerRef}
      >
        {foodData.map((food, index) => (
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
