import {  ArrowLeft,AreaChart,UserCheck,MenuSquare,ConciergeBell } from "lucide-react"
import { Button } from "./button"

const Info = () => {
  return (
    <div className='w-full relative mb-8'>
        <div className="middle_image relative  flex md:items-center">
           <div className='absolute flex bg-transparent h-[400px] flex-col md:flex-row md:p-8 p-0'>
                <div className="text-white basis-1/2 px-8 py-4 ">
                    <h3 className="mb-4 text-xl font-bold">رستوران‌های زنجیره‌ای ترخینه</h3>
                    <p className="leading-6 md:leading-8 mb-2">
                    مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                    </p>
                    <Button className="flex items-center group mr-auto bg-green-500 hover:bg-green-600 mb-2">
                        <span className="ml-2">اطلاعات بیشتر</span>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-all duration-200"/>
                    </Button>
                </div>
                <div className=" text-white basis-1/2 justify-center items-center">
                    <div className="flex  h-1/2 justify-around w-3/4 mx-auto">
                        <div className="">
                            <UserCheck className="mx-auto w-12 h-12 mb-4" />
                            <span>پرسنلی مجرب و حرفه ای</span>
                        </div>
                        <div>
                            <AreaChart className="mx-auto w-12 h-12 mb-4"  />
                            <span>کیفیت بالای غذا ها</span>
                        </div>
                    </div>
                    <div className="flex h-1/2 justify-around w-3/4 mx-auto">
                        <div>
                            <ConciergeBell className="mx-auto w-12 h-12 mb-4" />
                            <span>محیط دلنشین و ارام</span>
                        </div>
                        <div>
                            <MenuSquare className="mx-auto w-12 h-12 mb-4"  />
                            <span>منوی متنوع</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info