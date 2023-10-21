'use client';

import { useOrder } from "@/context/OrderContext";
import { Rate } from "antd";
import { HeartIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface verticalFoodCardProps {
    image: StaticImageData;
    name:string,
    price: string,
    score:string,
    discount:string,
    newPrice:string,
    numberOfScores:string,
    Compounds?:string
  }

const VerticalFoodCard = ({image,name,price,score,discount,newPrice,numberOfScores,Compounds}:verticalFoodCardProps) => {
    
    // !------------------- order context
const { state, dispatch } = useOrder();

const addOrder = (item: {
  name: string,
  quantity: number,
  newPrice: string,
  image:StaticImageData,
}) => {
  dispatch({ type: 'ADD_ORDER', order: {name:item.name,quantity:1,newPrice:item.newPrice,image:item.image}});
};

const deleteOrder = (item: {
  name: string,
  quantity: number,
  newPrice: string,
  image:StaticImageData,
}) => {
  dispatch({ type: 'DELETE_ORDER',order: {name:item.name,quantity:1,newPrice:item.newPrice,image:item.image}});
};

const clearOrders = () => {
  dispatch({ type: 'CLEAR_ORDERS' });
};

  
    return (
    <div className="flex p-2 w-full m-1 bg-white rounded-lg ">
        <div className="">
            <Image src={image} width="120" className="rounded-md ml-1" alt="food image" />
        </div>
        <div className="flex-1  text-slate-800 p-1 w-1/3  ">
            <div className=" flex justify-between mb-1">
                <h5 className="text-lg">{name}</h5>
                <div>
                    <HeartIcon className="w-6 h-6 text-rose-600" />
                </div>
            </div>
            <div className=" flex  justify-between items-center mb-1 text-xs md:text-base">
                {Compounds && <div className="max-w-[40%] md:max-w-[60%] overflow-hidden text-xs whitespace-nowrap md:whitespace-normal">{Compounds}</div>}
                <div className="text-slate-400 line-through">{price}</div>
                <div className="bg-rose-200 text-rose-700 rounded-lg p-1">{discount}%</div>
            </div>
            <div className="bg-gree-500 text-left text-slate-800 mb-2">{newPrice}تومان</div>
            <div className="bg-white flex flex-col  w-full md:flex-row justify-end items-center gap-x-2 ">
                <Rate allowHalf className="text-sm  lg:text-base mb-2" defaultValue={Number(score)}  />
                <button 
                 onClick={() => addOrder({name:name,quantity:1,newPrice:newPrice,image:image})}
                className="text-white w-full p-2 text-xs lg:text-base rounded-md bg-green-500 hover:bg-green-600 md:flex-1">افزودن به سبد خرید</button>
            </div>
        </div>
    </div>
  )
}

export default VerticalFoodCard