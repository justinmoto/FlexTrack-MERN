import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  
  const handleClicked = () => {
    logout()
  }
  return (
    <div className="bg-[#000000] grid grid-cols-2 ">
      <div>
        <Link to='/login'>
          <h1 className='p-10 text-[30px] text-[#00DF9A] font-extrabold'>Flextrack.</h1>
        </Link>
      </div>
      <nav className="flex justify-end items-center px-10 text-[#00DF9A]">
        {user && (<div className="grid grid-cols-2 place-items-center font-poppins">
          <h1 className="sm:mt-[60%] sm:ml-[97%] md:mt-[60%] md:ml-[120%]">{user.email}</h1>
          <Link to='/landingpage' onClick={handleClicked} className="px-4 p-2 bg-[#00DF9A] text-black rounded font-bold">LOGOUT</Link>
        </div>)}

        {!user && (<div className="p-2 rounded-[5px] bg-[#00DF9A] font-bold">
          <Link to='/login' className="px-5 text-black">LOGIN</Link>
        </div>)}
      </nav>
    </div>
  );
};

export default Navbar;
