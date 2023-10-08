import food1 from "@/public/homePage_menu/food1.png"
import food2 from "@/public/homePage_menu/food2.png"
import food3 from "@/public/homePage_menu/food3.png"
import food4 from "@/public/homePage_menu/food4.png"
import MenuCard from "./menuCard"


const HomeMenu = () => {

  return (
    <div className="mb-20">
    <h2 className="text-slate-800 text-center text-3xl mb-4 font-semibold">منوی رستوران</h2>
      <div className="flex items-center gap-1 flex-wrap gap-y-32">
          <MenuCard food={food1} label="غذای اصلی" />
          <MenuCard food={food2} label="پیش غذا"  />
          <MenuCard food={food3} label="دسر" />
          <MenuCard food={food4} label="نوشیدنی" />
      </div>
    </div>
  )
}

export default HomeMenu