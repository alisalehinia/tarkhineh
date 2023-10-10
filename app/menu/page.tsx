'use client';
import { URLSearchParams } from 'url';

interface menuPageProps {
  searchParams: URLSearchParams;
}

const MenuPage = ({searchParams }:menuPageProps) => {

    console.log("search params",searchParams);
    
    

  return (
    <div>
       <div className="bg-slate-100 w-full p-2 flex gap-3 text-slate-800">
            <div>غذای اصلی</div>
            <div>پیش غذا</div>
            <div>دسر</div>
            <div>نوشیدنی</div>
       </div>
    </div>
  )
}

export default MenuPage