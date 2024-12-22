import Question from "./question";
import petals from "../../assets/petals-removebg-preview.png"
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div className="mx-[80px] mt-[100px] mb-[60px]">
        <h1 className="text-[38px] font-bold ml-[600px]">FAQ</h1>
        <p className="ml-[250px] mt-[6px]">
          We address commonly asked questions and provide comprehensive answers
          to help you navigate your way <span className="block ml-[250px]"> through your nutrition and wellness
            journey.
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-between mb-[100px] mx-[80px]">
        <div className="bg-[#F6FBE9] rounded-[12px]">
          <Question
            longp="Personalized nutrition coaching involves creating a customized
            nutrition plan based on your unique goals, preferences, and dietary
            requirements. Our team of experts will work closely with you to
            develop a plan that fits your lifestyle and helps you achieve
            optimal health and wellness."
            Qt="What is personalized nutrition coaching?"
          />
          <div className="bg-black w-[700px] ml-[50px] h-[0.2px]"></div>
          <Question
            longp="
Nutrition coaching can provide personalized guidance on healthy eating habits, tailored meal plans, and accountability, empowering you to make sustainable lifestyle changes that support weight loss goals effectively."
            Qt="How can nutrition coaching help me lose weight?"
          />
          <div className="bg-black w-[700px] ml-[50px] h-[0.2px]"></div>
          <Question
            longp="Absolutely! A balanced nutrition plan emphasizes moderation and flexibility, allowing you to enjoy your favorite foods in moderation while prioritizing nutrient-dense choices to support overall health and weight management"
            Qt="Can I still enjoy my favorite foods while on a nutrition plan?"
          />
          <div className="bg-black w-[700px] ml-[50px] h-[0.2px]"></div>
          <Question
            longp="
You'll connect with your Nutritionist regularly, usually once a week or month, to track progress, adjust goals, and get ongoing support tailored to your needs."
            Qt="How often will I have contact with my Nutritionist?"
          />
          <div className="bg-black w-[700px] ml-[50px] h-[0.2px]"></div>
          <Question
            longp="
Results vary, but with consistent effort, you could start noticing positive changes in a few weeks to a couple of months."
            Qt="How long will it take to see results?"
          />
          <div className="bg-black w-[700px] ml-[50px] h-[0.2px]"></div>
          <Question
            longp="
Yes, our meal plans and recipes cater to vegetarians and vegans, offering delicious and nutritious options tailored to your dietary preferences."
            Qt="Are the meal plans and recipes provided suitable for vegetarians or vegans?"
          />
        </div>
        <div className="bg-[#F6FBE9] flex flex-col w-[413px] h-[400px] rounded-[12px]">
          <img src={petals} alt="" className="w-[150px] h-[110px] mt-[60px] mx-[135px] mb-[50px]" />
          <h1 className="text-[26px] font-semibold ml-[110px] mb-[12px]">Ask Your Question</h1>
          <p className="font-medium ml-[70px]">feel free to ask any question on anytime</p>
          <Link to="/contactus"><button className="bg-[#CBEA7B] mx-[139px] mt-[20px] font-semibold px-[20px] py-[14px] text-[14px] rounded-[6px;]">Ask A Question</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
