import Navbar from "../Home/Navbar";
import Uppertab from "../Home/Uppertab";
import realgrids from "../../assets/real grids.png";
import Single from "./background";
import pic from "../../assets/nutritionistlogo-removebg.png";
import Longtext from "./longtext";
import Leftside from "./leftside";
import Reftside from "./rightside";
import pic1 from "../../assets/fat woman.png";
import pic2 from "../../assets/Ballons.png";
import pic3 from "../../assets/apples.png";
import pic4 from "../../assets/green guys.png";
import pic5 from "../../assets/soil.png";
import pi1 from "../../assets/trophy.png";
import pi2 from "../../assets/3women.png";
import pi3 from "../../assets/laptop.png";
import pi4 from "../../assets/foot.png";
import pi5 from "../../assets/write.png";
import Achievments from "./achievs";
import Proud from "./proud";
import Foot from "../Home/footer";

// import Navbar from "../Home/Navbar";

function Servicehome() {
  return (
    <div className="z-[5]">
      <Uppertab />
      <Navbar />
      <div className="flex flex-row mt-[40px] ml-[25px]">
        <div className="flex flex-row ml-[50px]">
          <div>
            <Single />
            <Single />
          </div>
          <div>
            <Single />
            <Single />
          </div>
        </div>
        <div>
          <img
            src={realgrids}
            alt=""
            className="h-[370px] w-[500px] rounded-lg"
          />
          <img src={pic} alt="" className="h-[380px]  -mt-[380px] ml-[50px]" />
        </div>
        <div className="flex flex-row ml-[12px]">
          <div>
            <Single />
            <Single />
          </div>
          <div>
            <Single />
            <Single />
          </div>
        </div>
      </div>
      <Longtext />
      <div className="ml-[240px]">
        <h1 className="m-[30px] pl-[350px] text-3xl font-semibold">
          Our Story
        </h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified{" "}
          <span className="block ml-[150px] mb-[30px]">
            Nutritionists are here to guide you on your weight loss journey.
          </span>
        </p>
      </div>
      <Leftside
        storyt="Inspiring Transformations Story"
        pic={pic1}
        date="July 1,2025"
        longp="Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time."
      />
      <Reftside
        storyt="Recognition and Accolades Story"
        pic={pi1}
        date="March 10, 2023"
        longp="Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field."
      />
      <Leftside
        storyt="Continued Growth Story"
        pic={pic5}
        date="November 2, 2021"
        longp="Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people."
      />
      <Reftside
        storyt="Collaborating for Success Story"
        pic={pi2}
        date="July 15, 2019"
        longp="Nutritionist established partnerships with renowned health professionals, including Nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients."
      />
      <Leftside
        storyt="Enhanced Support Story"
        pic={pic2}
        date="April 1, 2018"
        longp="In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified Nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients."
      />
      <Reftside
        storyt="Innovating for Clients Story"
        date="January 20, 2017"
        pic={pi3}
        longp="Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches."
      />
      <Leftside
        storyt="Celebrating Success Stories"
        pic={pic4}
        date="September 5, 2015"
        longp="Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services."
      />
      <Reftside
        storyt="Expanding Reach Story"
        pic={pi4}
        date="June 10, 2014"
        longp="Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base."
      />
      <Leftside
        storyt="Research and Expertise Story"
        pic={pic3}
        date="March 15, 2012"
        longp="After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching."
      />
      <Reftside
        storyt="The Inception Story"
        pic={pi5}
        date="January 1, 2010"
        longp="On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist."
      />
      <Achievments />
      <Proud />
      <Foot />
    </div>
  );
}

export default Servicehome;
