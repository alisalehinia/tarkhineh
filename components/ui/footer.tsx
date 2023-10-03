import { Instagram, MessagesSquare, Twitter } from "lucide-react"
import FooterForm from "./footerForm"

const Footer = () => {
  return (
    <div className=" w-full footer_image h-40 flex flex-col md:flex-row text-white justify-center md:items-center">
        <div className=" w-full md:w-1/2 flex justify-center items-center">
            <div className="md:w-1/3 w-1/2 ">
                <h6 className="font-bold text-xl mb-4">دسترسی اسان</h6>
                <nav>
                    <ul className="leading-8">
                        <li>پرسش های متداول</li>
                        <li>قوانین ترخینه</li>
                        <li>حریم خصوصی</li>
                        <li>
                            <ul className="flex gap-2 mt-2">
                                <li>
                                    <Instagram className="w-5 h-5"/>
                                </li>
                                <li>
                                    <Twitter className="w-5 h-5"/>
                                </li>
                                <li>
                                    <MessagesSquare className="w-5 h-5"/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="md:w-1/3 w-1/2 ">
                <h6 className="font-bold text-xl mb-4">شعبه های ترخینه</h6>
                <nav>
                    <ul className="leading-8">
                        <li>شعبه اکباتان</li>
                        <li>شعبه چالوس</li>
                        <li>شعبه اقدسیه</li>
                        <li>شعبه ونک</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="w-1/2 hidden md:flex items-center">
            <FooterForm />
        </div>
    </div>
  )
}

export default Footer