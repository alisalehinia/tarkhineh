'use client';
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from 'next/navigation'

import Logo from '@/public/Logo.png'
import { ChevronDown,CupSoda,IceCream ,Soup,Pizza,User,ShoppingCart,Search,CreditCard,Bookmark,MapPin,LogOut, Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

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
  


const Header = () => {

    const pathName = usePathname();

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

  return (
    <header className="bg-slate-50 w-full flex items-center p-3 shadow mb-2">
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="w-12 h-12 mr-4 md:hidden text-slate-800" />
            </SheetTrigger>
            <SheetContent className="overflow-scroll">
                    <nav className="mt-4">
                        <ul className="flex flex-col gap-3">
                            <li className="mb-2">
                                <Button 
                                onClick={()=>setIsAlertDialogOpen(true)}
                                className="p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                    <Search className="w-5 h-5 ml-auto text-slate-800"/>
                                </Button>
                            </li>
                            <li className="mb-2 p-2 rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                <Link href="/">
                                صفحه اصلی
                                </Link>
                            </li>
                            <li className="mb-2 p-2 rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none overflow-scroll">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1" className="border-none">
                                        <AccordionTrigger className=" py-0">شعبه</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="flex flex-col">
                                                    <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                                        <Link href="/branch/ekbatan">اکباتان</Link>
                                                    </li>
                                                    <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                                        <Link href="/branch/chalus">چالوس</Link>
                                                    </li>
                                                    <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                                        <Link href="/branch/aghdasieh">اقدسیه</Link>
                                                    </li>
                                                    <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                                        <Link href="/branch/vanak">ونک</Link>
                                                    </li>
                                                </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-2" className="border-none">
                                        <AccordionTrigger className=" py-0">منو</AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="flex flex-col">
                                                    <li className="mb-2 p-2  rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none ">غذای اصلی</li>
                                                    <li className="mb-2 p-2 rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none ">پیش غذا</li>
                                                    <li className="mb-2 p-2 rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none ">دسر</li>
                                                    <li className="mb-2 p-2 rounded-md bg-slate-200 hover:bg-slate-400 w-full border-none outline-none ">نوشیدنی</li>
                                                </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">اعطای نمایندگی</li>
                            <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">درباره ما</li>
                            <li className="mb-2 rounded-md p-2 bg-slate-200 hover:bg-slate-400 w-full border-none outline-none">تماس با ما</li>
                        </ul>
                    </nav>
            </SheetContent>
        </Sheet>
            <div className=" mx-auto w-full md:w-auto">
                <Image src={Logo} alt="logo" className="md:ml-4 mx-auto"/>
            </div>
        <div className="flex-1 flex items-center justify-center">
        <ul className="text-slate-800 gap-8 hidden md:flex">
            <li className={isCurrentPage('/') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/">صفحه اصلی</Link>
            </li>
            <li className={`group relative `}>
                <Link href="/branch"
                className="flex gap-1 items-end justify-end  pb-1"
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
                <div className="hidden group-hover:block absolute top-6 right-0 hover:block z-10">
                    <nav className=" bg-white rounded-lg shadow  border border-slate-200 text-sm font-medium leading">
                        <ul  style={{width:"12rem"}}className=" bg-white rounded-lg text-sm font">
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link href="http://localhost:3000//branch/ekbatan">
                                    <span>اکباتان</span>
                                </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link href="/branch/chalus">
                                    <span>چالوس</span>
                                </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link href="http://localhost:3000//branch/aghdasieh">
                                    <span>اقدسیه</span>
                                </Link>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <Link href="http://localhost:3000//branch/vanak">
                                    <span>ونک</span>
                                </Link>
                            </li>
                        </ul>
                        </nav>
                </div>
            </li>
            <li className={`group relative ${isCurrentPage('/menu') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}`}
            >
            <Link href="/menu"
                className="flex gap-1 items-end justify-end"
                ><span>منو</span>
                <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-all duration-150" />
                </Link>
                <div className="hidden group-hover:block absolute top-6 right-0 hover:block z-10">
                    <nav className=" bg-white rounded-lg shadow  border border-slate-200 text-sm font-medium leading">
                        <ul  style={{width:"12rem"}}className=" bg-white rounded-lg text-sm font">
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>غذای اصلی</span>
                                <Pizza className="w-5 h-5"/>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>پیش غذا</span>
                                <Soup className="w-5 h-5" />
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>دسر</span>
                                <IceCream className="w-5 h-5"/>
                            </li>
                            <li className="p-2 bg-slate-50 m-2 rounded-lg hover:bg-slate-200/80 cursor-pointer flex items-center justify-between">
                                <span>نوشیدنی</span>
                               <CupSoda className="w-5 h-5"/>
                            </li>
                        </ul>
                        </nav>
                </div>
            </li>
            <li className={isCurrentPage('/Deputize') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/Deputize">اعطای نمایندگی</Link>
            </li>
            <li className={isCurrentPage('/about-us') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/about-us">درباره ما</Link>
            </li>
            <li className={isCurrentPage('/contact-us') ? 'text-green-600 font-semibold border-b border-green-600 pb-1' : ''}>
                <Link href="/contact-us">تماس با ما</Link>
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
            <Button  className="p-2 bg-green-200 hover:bg-green-400">
                <ShoppingCart className="w-5 h-5 text-green-800"/>
            </Button>
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

