import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { IoBarbell } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };
  return (
    <div className="bg-[#000000] h-screen sm:h-[85vh] md:h-[85vh] lg:h-[85vh] xl:h-[85vh] 2xl:h-[86vh]">
      <h1 className="text-center text-[35px] text-[#00DF9A] font-extrabold pt-10 2xl:pt-10">SIGN UP</h1>
      <form onSubmit={handleSubmit} className="grid place-items-center gap-5 mt-10 text-white">

        <div className='grid w-[40%] gap-1'>
          <label>Email:</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-2"
            />
        </div>

        <div className='grid w-[40%] gap-1'>
          <label>Password:</label>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2"
          />
        </div>

        <button disabled={isLoading} className="text-black p-2 bg-[#00DF9A] rounded-[8px] font-extrabold px-10">
          REGISTER
        </button>
        {error && <div>{error}</div>}
      </form>

      <div className="grid grid-cols-3 place-items-center text-white mt-[10%] sm:mt-[15%] md:mt-[15%] lg:mt-[12%] xl:mt-[10%] 2xl:mt-[10%]">
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
  );
};

export default Signup;
