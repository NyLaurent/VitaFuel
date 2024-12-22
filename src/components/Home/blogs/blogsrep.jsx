import Firstblogs from "./firstones";
import pic1 from "../../../assets/da7b7dc064c61db0c062ccbdaaf8177952c7a231.png";
import pic2 from "../../../assets/b9d2d8f38a133804e03e331970e5f4b5ac921d09.png";
import pic3 from "../../../assets/9587cb83576a655766715dbeea15fd66e6cb0e44.png";
import pic4 from "../../../assets/331b06a3fc603b2f87b51bb0fa1cc770057631b0.png";
import pic from "../../../assets/Emily-1.png";
import em from "../../../assets/Emily-2.png";
import em3 from "../../../assets/mark.png";
import em2 from "../../../assets/Sarah-1.png";

function Blogsforhome() {
  return (
    <div className="font-sans my-[100px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold mb-[50px] text-3xl ">Our Blogs</h1>
        <p className="text-balance mb-[40px] text-center">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of Nutritionists, dietitians, and wellness{" "}
          <span className="block text-balance text-center">
            experts. Here is what you can expect from our blog.
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-between md:mx-[60px] mx-3 my-8">
        <div className="flex sm:flex-row flex-col gap-4">
          <Firstblogs
            blogtitle="Weight Loss"
            homl="Discover how staying hydrated can support your weight loss goals and improve overall health."
            homep="The Benefits of Hydration for Weight Loss"
            homepic={pic1}
            profile={em3}
          />
          <Firstblogs
            blogtitle="Understanding Macronutrients"
            homepic={pic4}
            homl="Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management."
            profile={em}
            homep="Carbohydrates, Proteins, and Fats"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-4">
          <Firstblogs
            blogtitle="Mindful Eating"
            homl="Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being."
            homep="Cultivating a Healthy Relationship with Food"
            homepic={pic2}
            profile={pic}
          />
          <Firstblogs
            blogtitle="Healthy Snacks on the Go"
            homepic={pic3}
            profile={em2}
            homl="Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day."
            homep="Quick and Nutritious Options"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogsforhome;
