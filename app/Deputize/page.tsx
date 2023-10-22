'use client';
import LocationInput from "@/components/ui/locationInput"
import Slider from "@/public/Slider.png"
import { Award, BadgeHelp, Book, Square, Store } from "lucide-react"
import Image from "next/image"

const Deputize = () => {
    const handleLocationChange = (location: Location) => {
        console.log('Location changed:', location);
        // You can do something with the location data here, e.g., send it to your server or use it in your app.
      };
  return (
    <div>
        <div className=" mb-4">
            <Image className="min-h-[100px]" src={Slider} alt="depotize slider " />
        </div>
        <div className="flex justify-around border-b border-slate-200 pb-4 gap-4 flex-wrap">
            <div className="flex flex-col w-1/3 justify-center  items-center gap-y-4 ">
                <Store className="text-green-500 w-20 h-20" />
                <p className="text-slate-600 font-semibold text-sm">بیش از 20 شعبه فعال در سراسر کشور</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4" >
                <BadgeHelp className="text-green-500 w-20 h-20" />
                <p className="text-slate-600 font-semibold text-sm">تسهیلات راه‌اندازی رستوران و تجهیز آن</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4" >
                <Award className="text-green-500 w-20 h-20" />
                <p className="text-slate-600 font-semibold text-sm">طرح‌های تشویقی ارتقای فروش</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4" >
                <Book className="text-green-500 w-20 h-20" />
                <p className="text-slate-600 font-semibold text-sm">اعطای دستورالعمل پخت غذاها</p> 
            </div>
        </div>
        <div className="mb-2 border-b border-slate-200 pb-4">
            <p className="text-xl font-bold text-slate-800 text-center p-2 mb-2">مزیت دریافت نمایندگی</p>
            <div className="text-slate-700 flex flex-col md:flex-row justify-center  content-center md:content-normal md:justify-around flex-wrap">
                <div>
                    <div className="flex items-center gap-1 mb-2">
                       <Square className="text-green-700 w-4 h-4" />
                       <p>استفاده از برند شناخته شده ترخینه</p> 
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4" />
                        <p>به حداقل رساندن ریسک سرمایه گذاری</p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4" />
                        <p>
                        تسریع روند بازگشت سرمایه
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4" />
                        <p>
                        مشاوره های تخصصی جهت مدیریت رستوران
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4"/>
                        <p>
                        مشاوره در امور حقوقی، مالی و مالیاتی
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4"/>
                        <p>
                        پشتیبانی بازاریابی و منابع انسانی
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4"/>
                        <p>
                        دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <Square className="text-green-700 w-4 h-4"/>
                        <p>
                        طرح های تشویقی برای ارتقا فروش
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b border-slate-200 mb-6 pb-4">
            <p className="text-xl font-bold text-slate-800 text-center p-2 mb-2">دریافت مشاوره</p>
            <div className=" flex justify-between flex-col sm:flex-row mb-2 ">
            <input 
                placeholder="نام و نام خانوادگی"
                className="border w-2/3 mx-auto mb-2 sm:w-auto  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                <input 
                placeholder="شماره تماس"
                className="border w-2/3 mx-auto mb-2 sm:w-auto  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                <input 
                placeholder="زمان ایده ال"
                className="border w-2/3 mx-auto mb-2 sm:w-auto  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
            </div>
            <div className="text-center mb-6">
                <button className="bg-green-600 text-white rounded-md p-2 mx-auto inline-block">
                    درخواست مشاوره
                </button>
            </div>
        </div>
        <div className="border border-slate-300 mb-6 rounded-lg">
            <p className="text-xl font-bold text-slate-800 text-center p-2 mb-6">فرم درخواست نمایندگی</p>
            <p className="mr-6 mb-4">
            مشخصات فردی متقاضی
            </p>
            <div className=" flex justify-between flex-col sm:flex-row mb-2 ">
                <div className="flex flex-col w-full sm:w-1/3 justify-center gap-2">
                <input 
                placeholder="نام و نام خانوادگی"
                className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                </div>
                <div className="flex flex-col w-full sm:w-1/3 justify-center gap-2">
                <input 
                placeholder="کدملی"
                className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                </div>
                <div className="flex flex-col w-full sm:w-1/3 justify-center gap-2">
                <input 
                placeholder="شماره تماس"
                className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                </div>
            </div>
            <div className="">
                <p className="mr-6 mb-4">آدرس ملک متقاضی</p>
                <div className="flex sm:flex-row flex-col gap-2 justify-between">
                    <div className="flex flex-col w-full sm:w-1/3 justify-center gap-2">
                    <input 
                        placeholder="استان"
                        className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                        <input 
                        placeholder="شهر"
                        className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                    </div>
                    <div className="flex flex-col w-full sm:w-1/3 justify-center gap-2">
                        <input 
                            placeholder="منطقه"
                            className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm" />
                        <textarea
                        placeholder="ادرس دقیق"
                        className="border w-3/4 mx-auto mb-2 sm:w-10/12  border-slate-300 rounded-md p-2 outline-none focus:outline-none placeholder:text-sm"
                        >
                        </textarea>
                    </div>
                    <div className="w-full sm:w-1/3 h-1/3 flex flex-col justify-between items-center text-sm mb-6 text-slate-500">
                        <p className="font-bold mb-4 text-green-600">موقعیت ملک شما</p>
                        <LocationInput onLocationChange={()=>handleLocationChange} />
                        <button className="p-2 rounded-lg bg-green-600 text-white my-3 w-10/12">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deputize