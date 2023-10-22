import Image from 'next/image'
import aboutus from "@/public/aboutus.png"
import aboutus2 from "@/public/aboutus2.png"

const AboutUs = () => {
  return (
    <div>
         <div className=" mb-4">
            <Image className="min-h-[100px]" src={aboutus} alt="depotize slider " />
        </div>
        <div className='flex gap-1 my-3 text-slate-600 flex-col md:flex-row '>
            <div className='w-full md:w-1/2'>
                <p className='font-bold text-xl mb-2'>
                    درباره ما
                </p>
                <p className='m-2'>
                رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
                </p>
            </div>
            <div className='rounded-lg overflow-hidden w-full md:w-1/2 '>
                <Image className="min-h-[100px]" src={aboutus2} alt="depotize slider " />
            </div>
        </div>
    </div>
  )
}

export default AboutUs