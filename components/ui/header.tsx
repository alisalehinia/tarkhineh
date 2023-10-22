'use client';
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname, useSearchParams } from 'next/navigation'

import Logo from '@/public/Logo.png'
import { ChevronDown,CupSoda,IceCream ,Soup,Pizza,User,ShoppingCart,Search,CreditCard,Bookmark,MapPin,LogOut, Menu, MenuIcon} from "lucide-react"
import {Button} from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useOrigin } from "@/hooks/use-origin";
import { useEffect, useRef, useState } from "react";
import Drawer from "./drawer";
import { useOrder } from "@/context/OrderContext";


const Header = () => {

    const { state } = useOrder();

    // Calculate the total number of orders
    const totalOrders = state.orders.length;

    const pathName = usePathname();
    console.log(pathName);

    const isCurrentPage = (href: string) => {
      return pathName===href;
    };

    const origin = useOrigin();

    const ref = useRef<HTMLDivElement | null>(null);
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsAlertDialogOpen(false);
            // alert("Outside Clicked.");
            console.log("Outside Clicked.");
          }
        };
    
        window.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          window.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [ref]);

      const params = useParams();

    //   ? drawer state 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
    const [category,setCategory]=useState("");
    useEffect(()=>{
        const startIndex = window.location.search.indexOf('=') + 1;
        setCategory(window.location.search.substring(startIndex))
    })
    
   
  return (
    <header className="bg-slate-50 w-full flex items-center p-3 shadow mb-2">
          <div className="relative md:hidden block">
            <button onClick={openDrawer} className="p-2 rounded-full">
                <MenuIcon className="w-8 h-8 bg-white text-slate-800" />
            </button>
                <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
                    <Link href="/" className="p-2 border-b block" onClick={closeDrawer}>خانه</Link>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className=" py-0  p-2 border-b flex">شعبه</AccordionTrigger>
                                <AccordionContent>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/branch/ekbatan">اکباتان</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/branch/chalus">چالوس</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/branch/aghdasieh">اقدسیه</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/branch/vanak">ونک</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-none">
                            <AccordionTrigger className=" py-0  p-2 border-b flex">منو</AccordionTrigger>
                                <AccordionContent>
                                <Link onClick={closeDrawer} className={`block p-2 border-b  `} href="/menu/?category=mainFood">غذای اصلی</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/menu/?category=Appetizer">پیش غذا</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/menu/?category=Dessert">دسر</Link>
                                <Link onClick={closeDrawer} className="block p-2 border-b " href="/menu/?category=Beverages">نوشیدنی</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href="/Deputize"  className="block p-2 border-b " onClick={closeDrawer}>اعطای نمایندگی</Link>
                    <Link href="/about-us"  className="block p-2 border-b " onClick={closeDrawer}>درباره ما</Link>
                    <Link href="/contact-us"  className="block p-2 border-b " onClick={closeDrawer}>تماس باما</Link>


                </Drawer>
            </div>
            <div className=" mx-auto w-full md:w-auto">
                <Image src={Logo} alt="logo" className="md:ml-4 mx-auto"/>
            </div>
        <div className="flex-1 flex items-center justify-center">
        <ul className="text-slate-800 gap-8 hidden md:flex">
            <li  onClick={closeDrawer} className={isCurrentPage('/') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/">صفحه اصلی</Link>
            </li>
            <li className={`group relative `} >
                <Link href="/branch" 
                className="flex gap-1 items-end justify-end pb-1"
                onClick={closeDrawer}

                >
                   
                    {params?.branchName === "ekbatan" ? <span className="text-green-600 font-semibold border-b border-green-600 pb-1"> اکباتان</span>: 
                    params?.branchName === "aghdasieh" ? <span className="text-green-600 font-semibold border-b border-green-600 pb-1">اقدسیه</span>  :
                    params?.branchName === "chalus" ? <span className="text-green-600 font-semibold border-b border-green-600 pb-1">چالوس</span>  :
                    params?.branchName === "vanak" ? <span className="text-green-600 font-semibold border-b border-green-600 pb-1">ونک</span> :
                    <span 
                    className={`${isCurrentPage('/branch') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' 
                    : ''
                    }`}>شعبه</span>
                    }
                  
                            
                    
                <ChevronDown className={`w-5 h-5 group-hover:rotate-180 transition-all duration-150
                 ${params?.branchName === "ekbatan"
                  || params?.branchName === "aghdasieh" 
                  || params?.branchName === "chalus"
                   ||  params?.branchName === "vanak"
                    ? 'text-green-500' : ''}`} />
                </Link>
                <div className="hidden group-hover:block absolute top-6 right-0 hover:block z-30">
                    <nav className=" bg-white rounded-lg shadow  border border-slate-200 text-sm font-medium leading">
                        <ul  style={{width:"12rem"}}className=" bg-white rounded-lg text-sm font">
                            <li className={`p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between ${params?.branchName === "ekbatan" ? "text-green-500" : "text-slate-800"}`}>
                                <Link onClick={closeDrawer} href="http://localhost:3000//branch/ekbatan">
                                    <span>اکباتان</span>
                                </Link>
                            </li>
                            <li className={`p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between ${params?.branchName === "chalus" ? "text-green-500" : "text-slate-800"}`}>
                                <Link onClick={closeDrawer}  href="/branch/chalus">
                                    <span>چالوس</span>
                                </Link>
                            </li>
                            <li className={`p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between ${params?.branchName === "aghdasieh" ? "text-green-500" : "text-slate-800"}`}>
                                <Link onClick={closeDrawer} href="http://localhost:3000//branch/aghdasieh">
                                    <span>اقدسیه</span>
                                </Link>
                            </li>
                            <li className={`p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between ${params?.branchName === "vanak" ? "text-green-500" : "text-slate-800"}`}>
                                <Link onClick={closeDrawer} href="http://localhost:3000//branch/vanak">
                                    <span>ونک</span>
                                </Link>
                            </li>
                        </ul>
                        </nav>
                </div>
            </li>
            <li className={`group relative ${isCurrentPage('/menu')  && category==="" ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}`}
            >
            <Link href="/menu" onClick={()=>{
                closeDrawer()
                setCategory("");
            }}
                className="flex gap-1 items-end justify-end"
                ><span>منو</span>
                <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-all duration-150" />
                </Link>
                <div className="hidden group-hover:block absolute top-6 right-0 hover:block z-40">
                    <nav className=" bg-white rounded-lg shadow  border border-slate-200 text-sm font-medium leading">
                        <ul  style={{width:"12rem"}}className=" bg-white rounded-lg text-sm font">
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                               <Link className={`w-full flex items-center gap-2 ${category==="mainFood" ? `text-green-500` : "text-slate-800"}`} href="/menu/?category=mainFood">
                                    <span>غذای اصلی</span>
                                    <Pizza className="w-5 h-5"/>
                               </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link className={`w-full flex items-center gap-2 ${category==="Appetizer" ? `text-green-500` : "text-slate-800"}`} href="/menu/?category=Appetizer">
                                    <span>پیش غذا</span>
                                    <Soup className="w-5 h-5" />
                                </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link className={`w-full flex items-center gap-2 ${category==="Dessert" ? `text-green-500` : "text-slate-800"}`} href="/menu/?category=Dessert">
                                    <span>دسر</span>
                                    <IceCream className="w-5 h-5"/>
                                </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link className={`w-full flex items-center gap-2 ${category==="Beverages" ? `text-green-500` : "text-slate-800"}`} href="/menu/?category=Beverages">
                                    <span>نوشیدنی</span>
                                    <CupSoda className="w-5 h-5"/>
                               </Link>
                            </li>
                        </ul>
                        </nav>
                </div>
            </li>
            <li className={isCurrentPage('/Deputize') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/Deputize" onClick={closeDrawer}>اعطای نمایندگی</Link>
            </li>
            <li className={isCurrentPage('/about-us') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/about-us" onClick={closeDrawer}>درباره ما</Link>
            </li>
            <li className={isCurrentPage('/contact-us') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/contact-us" onClick={closeDrawer}>تماس با ما</Link>
            </li>
        </ul>
        </div>
        <div className="flex justify-center items-center gap-2 ml-2 mr-8">
       {origin && <AlertDialog  open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
            <AlertDialogTrigger>
                <Button  className="p-2 bg-green-200 hover:bg-green-400 hidden md:block">
                    <Search className="w-5 h-5 text-green-800"/>
                </Button>
            </AlertDialogTrigger>
                <AlertDialogContent className="p-0" ref={ref}>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="mx-auto p-2 bg-slate-300 w-full text-center rounded-t-lg text-slate-800    ">جستجو</AlertDialogTitle>
                    <AlertDialogDescription className="mx-auto p-2">
                       لطفا متن خود را تایپ و سپس دکمه Enter را بزنید
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="p-2">
                        <input 
                        className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:shadow ml-1"
                        placeholder="جستجو"
                        />
                        
                        <AlertDialogCancel>بستن</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>}
                <Link href="/cart">
                    <Button className="p-2 bg-green-200 hover:bg-green-400 relative">
                        {totalOrders!==0 && <div className="bg-green-500 p-2 rounded-full w-4 h-4 flex justify-center items-center absolute -left-1 -top-1 text-sm " >{totalOrders}</div>}
                        <ShoppingCart className="w-5 h-5 text-green-800"/>
                    </Button>
                </Link>
            <Button className="p-2 bg-green-200 hover:bg-green-400 group relative">
                <User className="w-5 h-5  text-green-800" />
                <ChevronDown className="w-5 h-5  text-green-800 group-hover:rotate-180 transition-all duration-150"/>
                <div className="hidden group-hover:block absolute top-8 left-0 hover:block text-slate-800 z-10">
                    <nav className=" bg-white rounded-lg shadow  border border-slate-200 text-sm font-medium leading">
                        <ul  style={{width:"12rem"}}className=" bg-white rounded-lg text-sm font">
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>پروفایل</span>
                                <User className="w-5 h-5"/>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>پیگیری سفارشات</span>
                                <CreditCard className="w-5 h-5" />
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>علاقه مندی ها </span>
                                <Bookmark className="w-5 h-5"/>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>ادرس های من</span>
                               <MapPin className="w-5 h-5"/>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>خروج از حساب</span>
                               <LogOut className="w-5 h-5"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Button>
        </div>
    </header>
  )
}

export default Header

