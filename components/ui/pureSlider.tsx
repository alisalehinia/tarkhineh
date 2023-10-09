import React, { useRef, useState } from 'react';
import { TouchEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

interface FoodItem {
  image: StaticImageData;
  name: string;
  price: string;
  newPrice: string;
  discount: string;
  numberOfScores: string;
  score: string;
}

interface CarouselProps {
  foodItems: FoodItem[];
  rtl?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ foodItems, rtl = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - touchStartXRef.current;
      const threshold = 50; // Adjust as needed

      if (deltaX > threshold) {
        // Swipe right
        handlePrev();
      } else if (deltaX < -threshold) {
        // Swipe left
        handleNext();
      }

      touchStartXRef.current = null;
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1));
    console.log("prev",currentIndex);
    
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1));
    console.log("next",currentIndex);
  };

  return (
    <div className="relative">
      <div
        className={`flex ${
          rtl ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center`}
      >
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-300">
          Prev
        </button>
        <button onClick={handleNext} className="p-2 rounded-full bg-gray-300">
          Next
        </button>
      </div>

      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`overflow-hidden ${
          rtl ? 'rtl' : 'ltr'
        } relative w-full h-64`}
      >
        <div
          className={`flex transition-transform duration-300 bg-red-400 `}
          style={{
            // width: `${foodItems.length * 100}%`,
            transform: `translateX(-${currentIndex*400}px)`,
          }}
        >
          {foodItems.map((foodItem, index) => (
            <div
              key={index}
              className=" h-full flex-shrink-0 w-1/4"
              style={{ marginLeft: 'auto', marginRight: 'auto' }} // Center items horizontally
            >
              <Image
                src={foodItem.image}
                alt={`Food ${index}`}
                width={200}
                height={200 }
              />
              <h3>{foodItem.name}</h3>
              <p>{foodItem.price}</p>
              {/* Add more content as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
