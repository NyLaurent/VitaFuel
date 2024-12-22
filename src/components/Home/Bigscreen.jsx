import bigpic from "../../assets/460e0bda998d66dceb40006674dcff12f383089a.png";
import grids from "../../assets/real grids.png";
import cust from "../../assets/b4c77114-ea34-4c0a-a248-0e3a97c93499.png"
import phonp from "../../assets/small phone pic.png"
import { Link } from "react-router-dom";

const Bigscreen = () => {
  return (
    <div className="Bigscreen flex flex-col md:flex-row">
      <div className="big-pic">
        <img src={grids} alt="" className="hidden md:block md:w-[650px]" />
        <img src={bigpic} alt="" className="woman absolute top-[115px] -left-[200px] w-[1000px] hidden md:block" />
        <img src={phonp} alt="" className="block w-[100%] md:hidden" />
      </div>
      <div className="sider-text">
        <div>
          <h3 className="text-[18px] md:text-3xl -ml-[50px] md:ml-[3px] font-semibold">Transform Your ❤️ Health with</h3>
          <div className="line  -ml-[50px] md:ml-[3px]"></div>
        </div>
        <h1 className="font-bold text-[28px] w-[358px] md:text-[48px] md:ml-[05px]  md:w-[610px] -ml-[30px]">
          Personalized Nutrition <span className="">Coaching</span>
        </h1>
        <p className="text-[14px] md:text-[16px] w-[321px] h-[126px] md:ml-[10px] md:mt-[16px] -ml-[50px] md:w-[610px]">
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified Nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div className="flex flex-row -ml-[50px] md:ml-[50px]">
          <Link to="/process">
            <button className="main-button font-semibold">Get Started today</button>
          </Link>
          <Link to="/pricing">
            <button className="main-button font-semibold">Book a Demo</button>
          </Link>
        </div>
        <div className="locate flex flex-row">
          <img src={cust} className="w-[75px] h-[40px]" alt="" />
          <p className="mx-[10px] my-[8px]"><span className="text-[#468671] font-bold">430+</span> Happy customers</p>
        </div>
      </div>
    </div>
  );
};

export default Bigscreen;
