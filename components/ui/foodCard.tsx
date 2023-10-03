import Image , { StaticImageData }from 'next/image'


interface FoodCardProps {
    food: StaticImageData;
    label:string
  }
const FoodCard = ({food,label}:FoodCardProps) => {
  return (
    <div className="relative mx-auto w-full sm:w-auto">
        <Image src={food} alt="food1" className="relative z-20 mx-auto"/>
            <div className="absolute bg-green-500 rounded-lg w-full h-44 top-1/2">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-primary bg-white z-20 p-2 rounded shadow">{label}</div>
        </div>
    </div>
  )
}

export default FoodCard