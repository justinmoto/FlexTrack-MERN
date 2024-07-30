import { IoBarbell } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom"
const LandingPage = () => {

  return (
    <div className="bg-[#000000] h-[86.4vh] sm:h-[85vh] lg:h-[90vh]">
        <h1 className='text-white text-center text-[68px] font-poppins font-extrabold px-[20%] pt-[3%] sm:text-[50px] sm:px-[5%] sm:pt-[5%] md:px-[3%] lg:px-[15%] xl:px-[1%] 2xl:px-[12%]'>
            <span className='text-[#00DF9A]'>Track your</span> progress and reach your <span className='text-[#00DF9A]'>fitness goals</span>
        </h1>
        <div className="flex justify-center items-center text-black text-[25px] font-bold mt-10">
            <Link to='/signup' className="bg-[#00DF9A] p-2 rounded-[5px] px-10">SIGN UP</Link>
        </div>

        <div className="grid grid-cols-3 place-items-center text-white mt-[10%] lg:mt-[10%] xl:mt-[10%] 2xl:mt-[10%]">
            <div className="grid place-items-center text-[20px]">
                <IoBarbell className="text-[60px]"/>
                <h1 className="text-[#00DF9A]">Easy to use</h1>
            </div>

            <div className="grid place-items-center text-[20px]">
                <MdAssignmentAdd className="text-[60px]"/>
                <h1 className="text-center text-[#00DF9A]">Keep track of your <br />exercise </h1>
            </div>

            <div className="grid place-items-center text-[20px]">
                <FaUserCheck className="text-[60px]"/>
                <h1 className="text-[#00DF9A]">Become healthy</h1>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
