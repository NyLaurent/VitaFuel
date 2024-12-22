import Ach from "./achievscomp";
import divine from "../../assets/f3c816c2-63bc-42e8-9009-85beea00a940.png";
import divine2 from "../../assets/95ad6b91-98e3-4b79-882e-111eaaeca1ca.png";
import divine4 from "../../assets/50c1ae4b-9868-449b-80ff-5243bceb8419.png";
import divine5 from "../../assets/7bbcb7b6-0617-4e41-9438-7a409c6e2ad4.png";

const Achievments = () => {
  return (
    <div>
      <div className="mt-[100px] ml-[45px] mb-[80px]">
        <h1 className=" ml-[500px] text-3xl font-semibold mb-[10px]">Company Achievements</h1>
        <p className="ml-[240px]">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients.
          <span className="block ml-[270px]"> Here are some of our notable achievements </span>
        </p>
      </div>
      <div className="flex flex-row ml-[55px]">
        <div>
          <Ach
            pic={divine}
            achievst="10,000+ Transformations"
            paragraph="Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle."
          />
          <Ach
            pic={divine2}
            achievst="Positive Client Reviews"
            paragraph="We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program."
          />
        </div>
        <div>
          <Ach
            pic={divine4}
            achievst="Recognition for Excellence"
            paragraph="Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success."
          />
          <Ach
            pic={divine5}
            achievst="Collaborate With Top Health Experts."
            paragraph="Nutritionist has established partnerships with respected Nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support."
          />
        </div>
      </div>
    </div>
  );
};

export default Achievments;
