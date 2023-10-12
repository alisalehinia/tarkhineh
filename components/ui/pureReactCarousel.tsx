'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';

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

const PureReactCarousel = ({ foodData, commentsList, scroll }:SliderProps) => {
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
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={6}
      infinite={true}
      visibleSlides={slides}
      touchEnabled={true}
      playDirection='forward'
      className='relative'
    >
      <Slider className='h-60'>
        <Slide className='bg-red-300' index={0}>I am the first Slide.1</Slide>
        <Slide className='bg-blue-300' index={1}>I am the second Slide.2</Slide>
        <Slide className='bg-green-300' index={2}>I am the third Slide.3</Slide>
        <Slide className='bg-red-300' index={0}>I am the first Slide.4</Slide>
        <Slide className='bg-blue-300' index={1}>I am the second Slide.5</Slide>
        <Slide className='bg-green-300' index={2}>I am the third Slide.6</Slide>
      </Slider>
      <ButtonBack>
        <ArrowRight className='text-slate-800 bg-white shadow-md rounded-full p-2 w-10 h-10 absolute right-0 top-1/2 '/>
      </ButtonBack>
      <ButtonNext>
        <ArrowLeft className='text-slate-800 bg-white shadow-md rounded-full p-2 w-10 h-10 absolute left-0 top-1/2' />
      </ButtonNext>
    </CarouselProvider>
  );
}

export default PureReactCarousel