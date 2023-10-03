import Image from 'next/image'
import HeroImage from "@/public/hero.jpg"
import { Button } from './button'

const Hero = () => {
  return (
    <div className='w-full relative mb-8'>
        <div className="hero_image relative">
           <div className='absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/3 text-center '>
            <h2 className='text-white text-2xl font-bold mb-5'>تجربه ی غذای سالم به سبک ترخینه</h2>
            <Button className='bg-green-600 text-white hover:bg-green-700'>سفارش انلاین غذا</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero