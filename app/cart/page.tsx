'use client';

import { useOrder } from '@/context/OrderContext';
import vector from "@/public/Vector.png";
import { CheckCircleIcon, CheckIcon, Info, InfoIcon, MinusIcon, Package, PackageCheck, PlusIcon, ShoppingBag, Trash, Truck, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function EmptyCart(){
  return <div className='border border-slate-500 rounded-md flex items-center justify-center'>
        <div className='my-8 relative'>
          <Image src={vector} alt="vector" className='relative z-10' />
          <div className='center z-20 flex flex-col items-center w-full'>
          <p className='text-slate-600 mb-8'>شما در حال حاضر هیچ سفارشی ثبت نکرده اید.</p>
          <Link href="/menu?category=mainFood">
            <button className='bg-transparent p-2 rounded-md border-green-700 border-2 text-green-700 hover:bg-green-700 hover:text-white'>منوی رستوران</button>
          </Link>
          </div>
        </div>
  </div>
}
function OrdersList(){
  const { state, dispatch } = useOrder();

  const addOrder = (item: string) => {
    dispatch({ type: 'ADD_ORDER', order: { item, quantity: 1 } });
  };

  const deleteOrder = (item: string) => {
    dispatch({ type: 'DELETE_ORDER', order: { item, quantity: 1 } });
  };

  const clearOrders = () => {
    dispatch({ type: 'CLEAR_ORDERS' });
  };

  return(
    <div className='sm:p-3 bg-slate-50 rounded-lg text-xs md:text-sm lg:text-base text-slate-700 '>
        <div className='flex justify-between border-b items-center p-1 sm:p-2 '>
          <p>سبد خرید</p>
          <div className='p-2 rounded-full bg-rose-100 group  hover:bg-rose-400' onClick={()=>clearOrders()}>
          <Trash className='w-5 h-5 sm:w-6 sm:h-6 text-rose-600 group-hover:text-white' />
          </div>
        </div>

        <div className='max-h-60 overflow-y-scroll  p-1 border-b-2 pb-2'>
          {
            state.orders.map((order,index)=>(
              <div key={index} className={`flex bg-slate-100 m-1 justify-between sm:px-2 px-1 py-1 rounded-lg ${index%2!==0 ? "bg-white" : "bg-slate-100"}`}>
                  <div className=' '>
                    <div>
                      {order.item}
                    </div>
                    <div className='text-sm'>122,000</div>
                  </div>
                  <div className='flex justify-between items-center gap-1'>
                    <button className='p-1 rounded-full bg-green-100'>
                      <PlusIcon onClick={()=>addOrder(order.item)} className='w-5 h-5 text-green-600'  />
                    </button>
                    <div className='p-1'>
                      {order.quantity}
                    </div>
                    <button className='p-1 rounded-full bg-rose-100'>
                      <MinusIcon onClick={()=>deleteOrder(order.item)} className='w-5 h-5 text-rose-600'  />
                    </button>
                  </div>
              </div>
            ))
          }
        </div>
        <div className='flex justify-between items-center p-1 py-2 border-b-2 '>
          <div >تخفیف محصولات</div>
          <div>63,000</div>
        </div>
        <div className=' py-2 border-b-2 '>
          <div className='flex justify-between items-center p-1 pb-2'>
            <div> هزینه ارسال</div>
            <div>0</div>
          </div>
          <div className='flex  text-sm gap-1 text-slate-500'>
            <Info className='w-5 h-5 text-rose-400'/>
            <p className=' text-xs md:text-sm lg:text-base'>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
          </div>
        </div>
        <div className=' py-2 border-b-2 '>
          <div className='flex justify-between items-center p-1 pb-2 mb-2'>
            <div> مبلغ قابل پرداخت</div>
            <div className='flex items-center gap-1'>
              <p>220,000</p>
              <p>تومان</p>
            </div>
          </div>
            <button className='bg-green-600 w-full text-white flex items-center justify-center gap-1 rounded-lg p-2'>
              <CheckCircleIcon className=' w-5 h-5 ' />
              <p>ثبت سفارش</p>
            </button>
        </div>
    </div>
  )
}
interface menuPageProps {
  searchParams: URLSearchParams & {step:string};
}
export default function CartPage({searchParams }:menuPageProps) {
  const { state, dispatch } = useOrder();
  let w_recept_step_1 = ((searchParams.step === "cart" || !searchParams.step) && state.orders.length!=0 ) ? "w-full": undefined
  let w_recept_step_2 = searchParams.step==="user-info" ? "sm:w-1/3" : undefined
  let w_info_step_1 = ((searchParams.step === "cart" || !searchParams.step) && state.orders.length!=0 ) ? "w-0 h-0": undefined
  let w_info_step_2 = searchParams.step==="user-info" ? "sm:w-2/3" : undefined

  return (
    <div className='bg-white'>
      <div 
      className=' flex justify-around mb-2 text-green-500 p-2 text-xs md:text-sm lg:text-base'>
          <Link href="?step=cart" className={` p-2 ${ (searchParams?.step==="cart" ) && "text-green-500"}  ${(searchParams?.step==="cart" || !searchParams?.step) && "font-bold border-b border-green-400 "} flex items-center cursor-pointer gap-1`}>
            <ShoppingBag className={`w-5 h-5 md:w-6 md:h-6 `} />
            <span>سبد خرید</span>
          </Link>
          <Link  href="?step=user-info" 
          className={` p-2${(searchParams?.step==="user-info" || searchParams?.step==="cart") && "text-green-500"}  ${searchParams?.step==="user-info" && "font-bold border-b border-green-400"} flex items-center gap-1 cursor-pointer`}>
            <UserCheck className={`w-5 h-5 md:w-6 md:h-6 `} />
            <span>تکمیل اطلاعات </span>
          </Link>
          <Link href="?step=payment" className={`p-2 ${(searchParams?.step==="user-info" || searchParams?.step==="cart" || searchParams?.step==="payment") && "text-green-500 cursor-pointer "}  ${searchParams?.step==="payment" && "font-bold border-b border-green-400"} flex items-center gap-1`}>
            <ShoppingBag className={`w-5 h-5 md:w-6 md:h-6 `} />
            <span> پرداخت</span>
          </Link>
      </div>
      {state.orders.length === 0 && <EmptyCart /> }
      {state.orders.length !== 0 &&
      <div className='flex flex-col sm:flex-row gap-y-2'>
        <div className={` ${w_info_step_1} ${w_info_step_2} transition-all duration-150 `}>
          <div className='flex justify-between md:items-center md:flex-row flex-col text-sm md:text-base bg-slate-50 mx-2 text-slate-700 py-4  rounded-md'>
            <div className='flex items-center m-2 md:justify-between gap-2 font-semibold border-b sm:border-none pb-2'>
              <Package className='w-6 h-6' />
              <p>
                روش تحویل سفارش
              </p>
            </div>
            <div className='flex items-center  md:justify-between gap-2 pr-2 mb-1'>
              <input type="radio" />
              <label htmlFor="">ارسال توسط پیک</label>
              <Truck className='w-6 h-6' />
            </div>
            <div className='flex items-center  md:justify-between gap-2 pr-2'>
              <input type="radio" />
              <label htmlFor="">تحویل حضوری</label>
              <PackageCheck className='w-6 h-6'  />
            </div>
          </div>
        </div>
        <div className={` ${w_recept_step_1} ${w_recept_step_2} transition-all duration-150`}>
          <OrdersList />
        </div>
      </div>
      }
  </div>
  );
}
{/* <ul>
{state.orders.map((order, index) => {
 return  <li key={index}>
 {order.quantity > 1 ? `${order.quantity} x ` : ''}
 {order.item}{' '}
 <button onClick={() => deleteOrder(order.item)}>Remove</button>
</li>})}
</ul> */}