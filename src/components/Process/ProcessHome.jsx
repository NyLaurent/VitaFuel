import Navbar from "../Home/Navbar";
import Uppertab from "../Home/Uppertab";
import Homepic from "../Team/homepic";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Explan from "./explan";
import Proud from "../services/proud";
import Foot from "../Home/footer";
import icon1 from "../../assets/Icon Container.png"
import icon2 from "../../assets/Icon Container-1.png"
import icon3 from "../../assets/Icon Container-2.png"
import icon4 from "../../assets/Icon Container-3.png"
import icon5 from "../../assets/Icon Container-4.png"
import icon6 from "../../assets/Icon Container-5 (2).png"
import icon7 from "../../assets/Icon Container-6.png"
import icon8 from "../../assets/Icon Container-7.png"
import icon9 from "../../assets/Icon Container-8.png"
import icon10 from "../../assets/Icon Container-9.png"

const ProcessHome = () => {
  return (
    <div>
      <Uppertab />
      <Navbar />
      <Homepic
        cla="text-[30px] font-bold ml-[360px] -mt-[40px] mb-[40px]"
        abs={abs}
        cont={cont}
        h="Your Journey to Health and Wellness"
        p='At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here is a detailed breakdown of our process:'
      />
      <div className="flex flex-row">
        <div className="ml-[70px]">
          <Explan
            number="01"
            img={icon2}
            heade="Initial Consultation"
            parm="We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements."
          />
          <Explan
            number="02"
            img={icon3}
            heade="Assessing Your Needs"
            parm="Our team of experienced Nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements." />
          <Explan
            number="03"
            img={icon4}
            heade="Personalized Nutrition Plan"
            parm="Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing." />
          <Explan
            number="04"
            img={icon5}
            heade="Meal Planning and Recipes"
            parm="To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan." />
          <Explan
            number="05"
            img={icon6}
            heade="Ongoing Support"
            parm="Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success." />
        </div>
        <div>
          <Explan
            number="06"
            img={icon7}
            heade="Progress Tracking"
            parm="We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments." />
          <Explan
            number="07"
            img={icon8}
            heade="Regular Check-ins"
            parm="We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes." />
          <Explan
            number="08"
            img={icon9}
            heade="Education and Resources"
            parm="Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle." />
          <Explan
            number="09"
            img={icon10}
            heade="Fine-Tuning and Adjustments"
            parm="As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs." />
          <Explan
            number="10"
            img={icon1}
            heade="Sustainable Lifestyle Habits"
            parm="Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program." />
        </div>
      </div>
      <Proud />
      <Foot />
    </div>
  );
};

export default ProcessHome;
