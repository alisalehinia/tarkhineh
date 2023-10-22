import Image from "next/image"
import contactus from "@/public/contactus.png"
import office from "@/public/office.jpg"

const ContactUs = () => {
  return (
    <div>
        <div className=" mb-8">
            <Image className="min-h-[100px]" src={contactus} alt="depotize slider " />
        </div>
        <div className="border  border-slate-200 overflow-hidden flex flex-col mb-6 sm:flex-row w-full sm:w-2/3 mx-auto justify-between  rounded-lg">
            <div className="p-2 text-sm text-slate-600 leading-6">
                <p>ادرس دفتر مرکزی</p>
                <p>خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
                <p>۰۲۱-۵۴۸۹۱۲۵۴-۵۵</p>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل </p>
            </div>
            <div className="justify-self-center w-full rounded-lg overflow-hidden sm:w-1/2">
                <Image src={office} alt="office"   />
            </div>
        </div>
    </div>
  )
}

export default ContactUs