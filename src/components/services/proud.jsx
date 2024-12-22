import { Link } from "react-router-dom";
const Proud = () => {
  return (
    <div className="bg-[#F6FBE9] flex flex-row pl-[40px] ml-[90px] mr-[70px] pb-9 pt-4 items-center rounded-xl mt-24 mb-24">
      <div className="w-[930px]">
        <h1 className="font-semibold text-[24px] mb-3 mt-5">We Are Proud of Our Achievements</h1>
        <p >But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.</p>
      </div>
      <div>
        <Link to="/pricing"><button className="bg-[#CBEA7B] p-3 rounded-lg font-semibold mt-[40px] ml-[70px]">Book a Demo</button></Link>
      </div>
    </div>
  )
}

export default Proud;