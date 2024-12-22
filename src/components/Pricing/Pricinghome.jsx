import Homepic from "../Team/homepic";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Uppertab from "../Home/Uppertab";
import Navbar from "../Home/Navbar";
import Button2 from "./button2";
import Pricing from "./pricing";
import Pricingdesc from "./pricingdesc";
import FAQ from "./FAQ";
import Foot from "../Home/footer";
import { useState } from "react";

const Pricinghome = () => {
  const [yearlyPricing, setYearlyPricing] = useState(false);
  return (
    <div>
      <Uppertab />
      <Navbar />
      <Homepic
        cla="text-[30px] font-bold ml-[540px] -mt-[40px] mb-[40px]"
        abs={abs}
        cont={cont}
        h="Our Pricing"
        p="At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle"
      />
      <Button2 setYearlyPricing={setYearlyPricing} yearlyPricing={yearlyPricing} />
      {yearlyPricing ?
        <div className="flex flex-row justify-between mt-[120px] px-[80px]">
          <Pricing
            planh="Basic Plan"
            price="$199"
            p1="Personalized nutrition plan tailored to your goals and dietary preferences."
            p2="Access to our mobile app for convenient meal tracking and progress monitoring."
            p3="Email support to address your questions and concerns."
            p4="Regular check-ins with a dedicated Nutritionist to review your progress and provide guidance."
          />
          <Pricing
            fif="bg-black w-auto h-[0.5px]"
            price="$399"
            planh="Premium Plan"
            fif2="px-[20px] w-[300px] py-[16px]"
            p1="All the features included in the Basic Plan."
            p2="One-on-one video consultations with your dedicated Nutritionist for more personalized guidance and support."
            p3="Recipe recommendations and meal planning assistance."
            p4="Priority email support for quicker responses to your inquiries."
            p5="Educational resources and guides to deepen your understanding of nutrition and healthy habits."
          />
          <Pricing
            planh="Ultimate Plan"
            price="$499"
            min="mx-[40px] rounded-[8px] text-white px-[20px] py-[16px] w-[300px] bg-[#234338]"
            ulti1="The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization."
            fif="bg-black w-auto h-[0.5px]"
            fif2="px-[20px] w-[300px] py-[16px]"
            p1="All the features included in the Plus Plan."
            p2="Unlimited access to video consultations with your dedicated Nutritionist for ongoing support and accountability."
            p3="Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals."
            p4="Customized meal plans and recipe suggestions based on your preferences and nutritional needs."
            p5="Priority email and phone support for immediate assistance."
          />
        </div> : <div className="flex flex-row justify-between mt-[120px] px-[80px]">
          <Pricing
            planh="Basic Plan"
            price="$49"
            p1="Personalized nutrition plan tailored to your goals and dietary preferences."
            p2="Access to our mobile app for convenient meal tracking and progress monitoring."
            p3="Email support to address your questions and concerns."
            p4="Regular check-ins with a dedicated Nutritionist to review your progress and provide guidance."
          />
          <Pricing
            fif="bg-black w-auto h-[0.5px]"
            price="$79"
            planh="Premium Plan"
            fif2="px-[20px] w-[300px] py-[16px]"
            p1="All the features included in the Basic Plan."
            p2="One-on-one video consultations with your dedicated Nutritionist for more personalized guidance and support."
            p3="Recipe recommendations and meal planning assistance."
            p4="Priority email support for quicker responses to your inquiries."
            p5="Educational resources and guides to deepen your understanding of nutrition and healthy habits."
          />
          <Pricing
            planh="Ultimate Plan"
            price="$99"
            min="mx-[40px] rounded-[8px] text-white px-[20px] py-[16px] w-[300px] bg-[#234338]"
            ulti1="The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization."
            fif="bg-black w-auto h-[0.5px]"
            fif2="px-[20px] w-[300px] py-[16px]"
            p1="All the features included in the Plus Plan."
            p2="Unlimited access to video consultations with your dedicated Nutritionist for ongoing support and accountability."
            p3="Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals."
            p4="Customized meal plans and recipe suggestions based on your preferences and nutritional needs."
            p5="Priority email and phone support for immediate assistance."
          />
        </div>}
      <Pricingdesc />
      <FAQ />
      <Foot />
    </div>
  );
};

export default Pricinghome;
