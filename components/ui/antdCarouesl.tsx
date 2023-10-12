'use client'
import { Carousel } from 'antd';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import FoodCard from './foodCard';

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
    scroll?: number;
  }

const AntDCarousel = ({ foodData, commentsList, scroll }:SliderProps) => {
    const [width,setWidth] = useState(0);
    const [slides,setSlides] = useState(1);
    
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };

    // Initial width set
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 1200) setSlides(4);
    else if (width > 900) setSlides(3);
    else if (width > 600) setSlides(2);
    else setSlides(1);
  }, [width]);

  return (
    <Carousel className='relative flex' slidesToShow={slides}  autoplay arrows rtl prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
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
            <div key={index} className='flex-shrink-0 w-[90%] md:w-1/2 flex-col md:flex-row rounded-md border bg-slate-50 border-slate-400 p-4 flex mx-2 justify-center items-center'>
              <div className='flex flex-col text-xs text-slate-500 justify-center ml-auto w-24 min-w-fit  items-center '>
                <Image src={comment.image} alt="user" className='rounded-full mb-2' width={80} height={80} />
                <div>
                  {comment.name}
                </div>
                <div>
                  {comment.date}
                </div>
              </div>
              <div className='text-right' >
                {comment.text}
              </div>
            </div>
          ))
        }
    </Carousel>
  );
};

const PrevArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return (
    <button className="carousel-control " onClick={onClick}>
        <ArrowLeft className='p-2 rounded-full text-slate-800 bg-white absolute z-20 top-1/2 left-0 shadow-lg w-10 h-10' />
    </button>
  );
};

const NextArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return (
    <button className="carousel-control" onClick={onClick}>
      <ArrowRight className='p-2 rounded-full text-slate-800 bg-white absolute z-20 top-1/2 right-0 shadow-lg w-10 h-10' />
    </button>
  );
};

export default AntDCarousel;
