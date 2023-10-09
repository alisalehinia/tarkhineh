'use client';
import { useParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import food1 from "../../../public/branchfoods/food1.png"
import food2 from "../../../public/branchfoods/food2.png"
import food3 from "../../../public/branchfoods/food3.png"
import food4 from "../../../public/branchfoods/food4.png"
import food5 from "../../../public/branchfoods/food5.png"
import food6 from "../../../public/branchfoods/food6.png"
import profile1 from "../../../public/profile1.png";
import profile2 from "../../../public/profile2.png";

import { Clock, LocateIcon, PhoneIcon, ScrollText } from 'lucide-react';
import CarouselComponent from '@/components/ui/carousel';
import Slider, { FoodItem, comment } from '@/components/ui/slider';




const popularFoods: FoodItem[] = [
  {
    image:food1,
    name:"بادمجان شکم پر",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food2,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food3,
    name:"فیتن خوزستانی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food4,
    name:"کالزونه اسفناج",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },{
    image:food1,
    name:"پیتزا قارچ",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food5,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food6,
    name:"راتاتویی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food1,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  }
];
const iranianFood: FoodItem[] = [
  {
    image:food6,
    name:"بورانی بادمجان",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food4,
    name:"کالزونه اسفناج",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food2,
    name:"راتاتویی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food3,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food5,
    name:"بادمجان شکم پر",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food4,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food6,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  },
  {
    image:food1,
    name:"دلمه برگ کلم",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53"
  }
];
const commentsList: comment[] = [
  {
    image:profile1,
    name:"ارزو علیزاده",
    date: "25 شهریور",
    text:"از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. "
  },
  {
    image:profile2,
    name:"سردار وظیفه",
    date: "13 اسفند",
    text:"از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. "
  },
  {
    image:profile1,
    name:"ارزو علیزاده",
    date: "25 شهریور",
    text:"از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. "
  },{
    image:profile2,
    name:"سردار وظیفه",
    date: "13 اسفند",
    text:"از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. "
  },
  {
    image:profile1,
    name:"ارزو علیزاده",
    date: "25 شهریور",
    text:"از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. "
  },

]
const BranchPage = () => {
    const params = useParams();
    console.log(params);
   
    
  return (<div className=''>
              <div className='mb-4'>
                <CarouselComponent />
              </div>
              <div className='bg-green-700 rounded-lg p-4 mb-4'>
                <h2 className='font-extrabold p-2 text-2xl text-white' > غذاهای ایرانی</h2>
                  <Slider foodData={iranianFood} scroll={440} />
                </div>
                <div>
                <h2 className='font-extrabold p-2 text-2xl text-slate-800' > غذاهای محبوب</h2>
                <Slider foodData={popularFoods} scroll={440} />
                </div>
                <div>
                <button className='text-green-700 border-2 border-green-700 flex items-center gap-1 p-2 rounded-lg mx-auto mb-4'>
                  <span>مشاهده ی منوی کامل</span>
                  <ScrollText className='w-8 h-8 ' />
                </button>
              </div>
              {/* info */}
              <div className='w-full md:w-2/3 mx-auto rounded-md shadow-lg flex items-center flex-wrap text-xs font-medium mb-6 text-slate-800 p-2'>
                <div className='w-full md:w-1/3 flex md:flex-col  items-center gap-2 gap-x-4'>
                  <PhoneIcon className='w-7 h-7' />
                  <span>021-33534367</span>
                </div>
                <div className='w-full md:w-1/3 flex md:flex-col  items-center gap-2 gap-x-4'>
                  <LocateIcon className='w-7 h-7' />
                  <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
                </div>
                <div className='w-full md:w-1/3 flex md:flex-col  items-center gap-2 gap-x-4'>
                  <Clock className='w-7 h-7' />
                  <span>همه‌روزه از ساعت ۱۲  الی ۲۳ </span>
                </div>
              </div>
              <div>
              <h2 className='font-extrabold p-2 text-2xl text-slate-800 text-center' >نظرات کاربران</h2>
                <Slider commentsList={commentsList} scroll={800} />
              </div>
          </div>
  )
}

export default BranchPage