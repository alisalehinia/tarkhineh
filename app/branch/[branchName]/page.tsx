'use client';
import { useParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import food1 from "../../../public/branchfoods/food1.png"
import FoodCard from '@/components/ui/foodCard';
import { ArrowLeftIcon, ArrowRight, ArrowRightIcon } from 'lucide-react';

const BranchPage = () => {
    const params = useParams();
    console.log(params);

    const cardContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft -= 300; 
        }
    };

    const scrollRight = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft += 300; 
        }
    };
  return (<div className=''>
    <h2 className='font-extrabold p-2 text-2xl text-slate-800' >پیشنهاد ویژه</h2>
    <div className='flex overflow-scroll transition-all duration-150 scroll-smooth special_recommend rounded '
     style={{ overflow: 'hidden' }} 
    ref={cardContainerRef}
    >
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />
      <FoodCard image={food1} name="دلمه برگ کلم" price="223,000" newPrice="209,000" discount='8' numberOfScores="52" score="5" />

    </div>
    <button onClick={scrollLeft} className='absolute  left-0 top-1/2 '>
      <ArrowLeftIcon className='bg-white p-2 rounded-full w-10 h-10 md:ml-4 hover:bg-slate-400 hover:text-white shadow' />
    </button>
    <button onClick={scrollRight} className='absolute right-0 top-1/2 '>
      <ArrowRightIcon className='bg-white p-2 rounded-full w-10 h-10 md:mr-4 hover:bg-slate-400 hover:text-white shadow' />
    </button>
    </div>
  )
}

export default BranchPage