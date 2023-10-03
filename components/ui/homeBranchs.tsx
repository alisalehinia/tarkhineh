import branch1 from "@/public/branch/branch1.png"
import branch2 from "@/public/branch/branch2.png"
import branch3 from "@/public/branch/branch3.png"
import branch4 from "@/public/branch/branch4.png"
import BranchCard from "./branchCard"

const HomeBranchs = () => {
  return (
    <div className="mb-16">
        <h1 className="text-center text-xl font-bold mb-8">ترخینه گردی</h1>
        <div className="flex items-center gap-3 flex-wrap justify-around">
            <BranchCard branch={branch1} name="شعبه اکباتان" 
            address="شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" />
            <BranchCard branch={branch2} name="شعبه چالوس"
            address="چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی" />
            <BranchCard branch={branch3} name="شعبه اقدسیه"
            address="خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" />
            <BranchCard branch={branch4} name="شعبه ونک"
            address="میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" />
        </div>
    </div>
  )
}

export default HomeBranchs