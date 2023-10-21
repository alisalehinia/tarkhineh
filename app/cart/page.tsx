'use client';

import { useOrder } from '@/context/OrderContext';
import vector from "@/public/Vector.png";
import payment from "@/public/homePage_menu/payment.png"
import { CheckCircleIcon, CheckIcon, Info, InfoIcon, LocateIcon, MinusIcon, Package, PackageCheck, PlusIcon, ShoppingBag, StickyNote, Trash, Truck, UserCheck } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Order } from '@/context/OrderContext';

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
const calculateTotalPrice = (orders:Order[]) => {
  // Initialize the total price to 0
  let totalPrice = 0;

  // Iterate through the orders and sum the 'newPrice' values
  for (const order of orders) {
    // Parse the 'newPrice' as a float (assuming it's a string representing a price)
    const price = parseFloat(order.newPrice);

    // Check if 'price' is a valid number
    if (!isNaN(price)) {
      totalPrice += price * order.quantity;
    }
  }
  return totalPrice;
}
function OrdersList(){
  const { state, dispatch } = useOrder();
  const totalPrice = calculateTotalPrice(state.orders);

  const addOrder = (item: {
    name: string,
    quantity: number,
    newPrice: string,
    image:StaticImageData,
  }) => {
    dispatch({ type: 'ADD_ORDER', order: {
       name: item.name, 
       newPrice: item.newPrice,
       image:item.image, 
       quantity: 1 } });
  };

  const deleteOrder = (item: {
    name: string,
    quantity: number,
    newPrice: string,
    image:StaticImageData,
  }) => {
    dispatch({ type: 'DELETE_ORDER', order: {
      name: item.name, 
      newPrice: item.newPrice,
      image:item.image, 
      quantity: 1 } });
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
                  <div className='flex items-center gap-2 '>
                    <div className='rounded-lg overflow-hidden'>
                      <Image className='hover:scale-110 transition-all duration-75' src={order.image} alt="image cart"  width={65} height={65} />
                    </div>
                    <div>
                      {order.name}
                    </div>
                    <div className='text-sm'>{order.newPrice}</div>
                  </div>
                  <div className='flex justify-between items-center gap-1'>
                    <button className='p-1 rounded-full bg-green-100'>
                      <PlusIcon onClick={()=>addOrder({name:order.name,quantity:1,newPrice:order.newPrice,image:order.image})} className='w-5 h-5 text-green-600'  />
                    </button>
                    <div className='p-1'>
                      {order.quantity}
                    </div>
                    <button className='p-1 rounded-full bg-rose-100'>
                      <MinusIcon onClick={()=>deleteOrder({name:order.name,quantity:1,newPrice:order.newPrice,image:order.image})} className='w-5 h-5 text-rose-600'  />
                    </button>
                  </div>
              </div>
            ))
          }
        </div>
        <div className='flex justify-between items-center p-1 py-2 border-b-2 '>
          <div >تخفیف محصولات</div>
          <div>{13/100 * totalPrice }</div>
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
              <p>{`${totalPrice}000`}</p>
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
      {state.orders.length !== 0 && searchParams.step!=="payment" &&
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
          <div className='p-2 bg-slate-50 rounded-md text-slate-700 m-2 '>
            <div className='flex justify-between items-center py-2 border-b  '>
              <div className='flex items-center gap-1'>
                <LocateIcon className='w-6 h-6' />
                <p>ادرس ها</p>
              </div>
              <div className='text-green-500 flex items-center gap-1'>
                <PlusIcon  className='w-6 h-6' />
                <p>افزودن ادرس</p>
              </div>
            </div>
            <div className='my-8 flex items-center justify-center'>
              <Image src={vector} alt="vector" className=' ' />
            </div>
          </div>
          <div className='p-2 bg-slate-50 rounded-md text-slate-700 m-2'>
            <div className='flex items-center gap-1 mb-4'>
              <StickyNote className='w-6 h-6' />
              <h6>توضیحات سفارش(اختیاری)</h6>
            </div>
            <textarea 
            placeholder='نکات ضروری که باید بدونیم ...'
            className='focus:shadow-md bg-slate-200 w-full rounded-lg border-none focus:border-none focus:outline-none p-2 text-slate-700' cols={30} rows={4}></textarea>
          </div>
        </div>
        <div className={` ${w_recept_step_1} ${w_recept_step_2} transition-all duration-150`}>
          <OrdersList />
        </div>
      </div>
      }
      <div>
         {searchParams.step==="payment" && state.orders.length !== 0 && <>
         <div className='flex flex-col items-center gap-y-6 mb-2'>
          <Image src={payment} alt="payment" />
          <p className='-ml-4 text-xl sm:text-3xl text-green-600 font-semibold mb-2'>پرداخت شما با موفقیت انجام شد.</p>
         </div>
         <div className='text-center mb-4 text-green-600'>
          <p>کد رهگیری سفارش شما:  ۲۱۵۴۹۰۱۹</p>
         </div>
         <div className=' flex justify-center items-center text-sm sm:text-base gap-4 mb-4'>
            <button className='p-2 rounded-md border border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>بازگشت به صفحه اصلی</button>
            <button className='p-2 rounded-md text-white bg-green-600 hover:bg-white hover:text-green-600'>پیگیری سفارش</button>
         </div>
         </>
         }
      </div>
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