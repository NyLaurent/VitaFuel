import headpic from "../../assets/nutritionist.png";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png"
const Navbar = () => {
  return (
    <div className=" bg-[#1A3129] flex flex-row justify-between -pb-[30px] px-[10px] md:px-[40px]">
      <Link to="/"> <div className=" flex flex-row mt-[10px] md:mt-[20px]">
        <img src={headpic} className="w-[38px] h-[38px]" />
        <h1 className="text-[20px] font-extrabold mt-[4px] md:mt-[5px] text-white">Nutritionist</h1>
      </div></Link>
      <nav className="text-white">
        <ul className="hidden sm:flex flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:block sm:bg-[#CBEA7B] my-[20px] px-[20px] py-[12px] rounded-lg">
        <Link to="/contactus">
          <button className="font-semibold">Contact Us</button>
        </Link>
      </div>

      <div className="block py-[20px] sm:hidden">
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;