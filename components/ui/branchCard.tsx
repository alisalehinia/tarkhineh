import Image , { StaticImageData }from 'next/image'
import { Button } from './button';


interface BranchCardProps {
    branch: StaticImageData;
    name:string,
    address:string
  }

  
  const BranchCard = ({branch,name,address}:BranchCardProps) => {
    return (
        <div className="mx-auto sm:w-60 sm:m-2 mb-4 w-full shadow-xl hover:shadow transition-all hover:ring hover:ring-offset-2 hover:ring-green-500 duration-100 rounded h-96 relative">
            <Image src={branch} alt="branch name" className='mx-auto h-52 bg-[80%] mb-2'/>
            <h4 className='text-center font-semibold text-xl  mb-3'>{name}</h4>
            <p className='text-slate-700 mb-4 text-center'>{address}</p>
            <Button className="flex absolute bottom-0 right-1/2 translate-x-1/2 items-center group mx-auto text-green-500 hover:bg-green-500 hover:text-white mb-4" variant="outline">
                <span className="ml-2">صفحه شعبه</span>
            </Button>
        </div>
    )
  }
  
  export default BranchCard