'use client';
import Link from 'next/link';
import { URLSearchParams } from 'url';

import food1 from "../../public/branchfoods/food1.png"
import food2 from "../../public/branchfoods/food2.png"
import food3 from "../../public/branchfoods/food3.png"
import food4 from "../../public/branchfoods/food4.png"
import food5 from "../../public/branchfoods/food5.png"
import food6 from "../../public/branchfoods/food6.png"

import fast1 from "../../public/fastFoods/fastFood1.png"
import fast2 from "../../public/fastFoods/fastFood2.png"
import fast3 from "../../public/fastFoods/fastFood3.png"

import appet1 from "../../public/Appetizers/Appetizer1.jpg"
import appet2 from "../../public/Appetizers/Appetizer2.jpg"
import appet3 from "../../public/Appetizers/Appetizer3.jpg"

import dessert1 from "../../public/desserts/dessert1.jpg"
import dessert2 from "../../public/desserts/dessert2.jpg"
import dessert3 from "../../public/desserts/dessert3.jpg"

import beve1 from "../../public/beverages/beverage1.jpg"
import beve2 from "../../public/beverages/beverage2.jpg"
import beve3 from "../../public/beverages/beverage3.jpg"
import VerticalFoodCard from '@/components/ui/verticalFoodCard';
import { Search } from 'lucide-react';
import { useState } from 'react';


const mainFoods={
  iranianFoods:[
    {
      image:food1,
      name:"بادمجان شکم پر",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"5",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food2,
      name:"دلمه برگ کلم",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"2.5",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food3,
      name:"فیتن خوزستانی",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"3",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food4,
      name:"کالزونه اسفناج",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"3.5",
      numberOfScores:"53",
      type:"iranianFood"
  
    },{
      image:food1,
      name:"پیتزا قارچ",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"3.5",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food5,
      name:"دلمه برگ کلم",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"2.5",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food6,
      name:"راتاتویی",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"5",
      numberOfScores:"53",
      type:"iranianFood"
    },
    {
      image:food1,
      name:"دلمه برگ کلم",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"4",
      numberOfScores:"53",
      type:"iranianFood"
    },
  ],
  fastFoods:[
    {
      image:fast1,
      name:"پیتزا رست بیف",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"4.5",
      numberOfScores:"53",
      type:"fastFood"
    },
    {
      image:fast2,
      name:"پیتزا رست بیف",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"4.5",
      numberOfScores:"53",
      type:"fastFood"
    },
    {
      image:fast3,
      name:"پیتزا رست بیف",
      price:"230,000",
      newPrice:"213,000",
      discount:"13",
      score:"4.5",
      numberOfScores:"53",
      type:"fastFood"
    },
  ],
};
const Appetizers=[
  {
    image:appet1,
    name:"سوپ",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"appetizer"
  },
  {
    image:appet2,
    name:"سوشی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"appetizer"
  },
  {
    image:appet3,
    name:"سالاد",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"appetizer"
  },
]
const  Desserts=[
  {
    image:dessert1,
    name:"کیک میوه ای",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"dessert"
  },
  {
    image:dessert2,
    name:"کوکی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"dessert"
  },
  {
    image:dessert3,
    name:"شیک توت فرنگی",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"dessert"
  },
]
const  Beverages=[
  {
    image:beve1,
    name:"اسموتی هندوانه",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"beverage"
  },
  {
    image:beve2,
    name:"اسموتی پروتئینه",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"beverage"
  },
  {
    image:beve3,
    name:"نوشانه کوکا",
    price:"230,000",
    newPrice:"213,000",
    discount:"13",
    score:"4.5",
    numberOfScores:"53",
    type:"beverage"
  },
]

interface menuPageProps {
  searchParams: URLSearchParams & {category:string};
}

const MenuPage = ({searchParams }:menuPageProps) => {

    console.log("search params",searchParams.category);

    const [searched,setSearched] = useState("");
    console.log(searched);

    const filteredMainFoods = mainFoods.iranianFoods.filter(food => {
      if (searched === "") {
        return true; 
      }
      return food.name.includes(searched);
    });
    const filteredFastFoods = mainFoods.fastFoods.filter(food => {
      if (searched === "") {
        return true; 
      }
      return food.name.includes(searched);
    });
    const filteredAppetizers = Appetizers.filter(food => {
      if (searched === "") {
        return true; 
      }
      return food.name.includes(searched);
    });
    const filteredDesserts = Desserts.filter(food => {
      if (searched === "") {
        return true; 
      }
      return food.name.includes(searched);
    });
    const filteredBeverages = Beverages.filter(food => {
      if (searched === "") {
        return true; 
      }
      return food.name.includes(searched);
    });


    
  return (
    <div>
       <div className="bg-slate-100 w-full p-2 flex flex-col md:flex-row items-center text-slate-800 mb-4">
           <div className='flex w-full md:w-1/2 gap-3 mb-2 md:mb-0'>
            <Link href="/menu?category=mainFood" className={`${searchParams?.category === 'mainFood'? "text-green-500 transition-all duration-300 pb-1 border-b border-green-500" :"text-slate-800 border-b pb-1 border-slate-50"}`} >غذای اصلی</Link>
              <Link href="/menu?category=Appetizer" className={`${searchParams?.category === 'Appetizer'? "text-green-500 transition-all duration-300 pb-1 border-b border-green-500" :"text-slate-800 border-b pb-1 border-slate-50"}`}>پیش غذا</Link>
              <Link href="/menu?category=Dessert" className={`${searchParams?.category === 'Dessert'? "text-green-500 transition-all duration-300 pb-1 border-b border-green-500" :"text-slate-800 border-b pb-1 border-slate-50"}`}>دسر</Link>
              <Link href="/menu?category=Beverages" className={`${searchParams?.category === 'Beverages'? "text-green-500 transition-all duration-300 pb-1 border-b border-green-500" :"text-slate-800 border-b pb-1 border-slate-50"}`}>نوشیدنی</Link>
           </div>
           <div className='flex relative w-full md:w-1/2 '>
              <input placeholder='جستجو' 
              value={searched}
              onChange={(e)=>setSearched(e?.target.value)}
              className='  border-none w-full  outline-none focus:outline-none p-2 rounded-md text-slate-800 placeholder:text-slate-500 ' />
              <Search className='w-6 h-6 absolute left-1 top-2 text-slate-500' />
           </div>
       </div>
       <div className='bg-slate-50'>
        {searchParams?.category === 'mainFood' &&
          <><h3 className='text-slate-800 mb-2 text-xl font-bold p-2'>غذای ایرانی</h3>
          <div className=' grid grid-cols-1 md:grid-cols-2  gap-1 md:gap-2 md:p-1'>
            {filteredMainFoods.map((food,index)=>(
              <VerticalFoodCard key={index}
               image={food.image} 
               name={food.name}  
               price={food.price}
               score={food.score}
               discount={food.discount}
               newPrice={food.newPrice}
               numberOfScores={food.numberOfScores}
               Compounds='برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز'
               />
            ))}
          </div>
          <h3 className='text-slate-800 mb-2 text-xl font-bold p-2'>فست فود</h3>
          <div className=' grid grid-cols-1 md:grid-cols-2  gap-1 md:gap-2 md:p-1'>
            {filteredFastFoods.map((food,index)=>(
              <VerticalFoodCard key={index}
               image={food.image} 
               name={food.name}  
               price={food.price}
               score={food.score}
               discount={food.discount}
               newPrice={food.newPrice}
               numberOfScores={food.numberOfScores}
               Compounds='برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز'
               />
            ))}
          </div></>}
              {
                searchParams?.category === 'Appetizer' && <><h3 className='text-slate-800 mb-2 text-xl font-bold p-2'>پیش غذا </h3>
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-1 md:gap-2 md:p-1'>
                  {filteredAppetizers.map((food,index)=>(
                    <VerticalFoodCard key={index}
                     image={food.image} 
                     name={food.name}  
                     price={food.price}
                     score={food.score}
                     discount={food.discount}
                     newPrice={food.newPrice}
                     numberOfScores={food.numberOfScores}
                     Compounds='تخم مرغ، گردو، سیر، آرد، روغن مایع	
                     سبزی کوکویی'
                     />
                  ))}
                </div> </>
              }
              {
                searchParams?.category === 'Dessert' && <><h3 className='text-slate-800 mb-2 text-xl font-bold p-2'> دسر </h3>
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-1 md:gap-2 md:p-1'>
                  {filteredDesserts.map((food,index)=>(
                    <VerticalFoodCard key={index}
                     image={food.image} 
                     name={food.name}  
                     price={food.price}
                     score={food.score}
                     discount={food.discount}
                     newPrice={food.newPrice}
                     numberOfScores={food.numberOfScores}
                     Compounds='بادمجان، پیاز، گوجه فرنگی	، سبزی خشک'
                     />
                  ))}
                </div> </>
              }
              {
                searchParams?.category === 'Beverages' && <><h3 className='text-slate-800 mb-2 text-xl font-bold p-2'> نوشیدنی </h3>
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-1 md:gap-2 md:p-1'>
                  {filteredBeverages.map((food,index)=>(
                    <VerticalFoodCard key={index}
                     image={food.image} 
                     name={food.name}  
                     price={food.price}
                     score={food.score}
                     discount={food.discount}
                     newPrice={food.newPrice}
                     numberOfScores={food.numberOfScores}
                     />
                  ))}
                </div> </>
              }
       </div>
    </div>
  )
}

export default MenuPage