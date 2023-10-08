import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from './button'
import { HeartIcon, StarIcon } from 'lucide-react';

interface FoodCardProps {
    image: StaticImageData;
    name:string,
    price: string,
    score:string,
    discount:string,
    newPrice:string,
    numberOfScores:string
  }

const FoodCard = ({image,name,price,score,discount,newPrice,numberOfScores}:FoodCardProps) => {
  return (
    <div className="mx-auto sm:w-60 sm:m-2 mb-4 w-full shadow-xl hover:shadow transition-all flex-shrink-0  rounded h-96 relative">
            <Image src={image} alt="branch name" className='mx-auto h-52 bg-[80%] mb-2'/>
            <h4 className='text-center font-semibold text-xl  mb-3'>{name}</h4>
            <div className='p-1 grid grid-rows-2 grid-cols-2 gap-1'>
                <div className='flex items-start gap-1'>
                    <HeartIcon className='w-4 h-4 text-slate-600' />
                    <span className=' text-slate-600 text-xs'>افزودن به علاقه مندی ها</span>
                </div>
                <div className='flex items-center gap-1 justify-self-end text-xs'>
                    <span className='text-slate-600 font-xs line-through'>{price}</span>
                    <span className='bg-rose-200 text-rose-700 rounded-xl p-1'>{discount}%</span>
                </div>
                <div className='flex items-center gap-1'>
                    <StarIcon className='w-4 h-4 text-yellow-600'  />
                        <div className='text-slate-600 text-xs flex items-center gap-1'>
                            <span>{score}</span>
                            <span>({numberOfScores} امتیاز)</span>
                        </div>
                </div>
                <div className='flex items-center gap-1 justify-self-end text-md text-slate-700'>
                    <span>{newPrice}</span>
                    <span>تومان</span>
                </div>
            </div>
            <Button 
            className="flex absolute bottom-0 right-1/2 translate-x-1/2 items-center group mx-auto bg-green-500 text-white
            hover:bg-white hover:text-green-500 outline-none hover:border hover:border-green-500
            w-3/4 mb-4"
             variant="outline">
                <span className="ml-2">افزودن به سبد خرید</span>
            </Button>
        </div>
  )
}

export default FoodCard