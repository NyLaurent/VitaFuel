import Uppertab from "../Home/Uppertab";
import Navbar from "../Home/Navbar";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Homepic from "../Team/homepic";
import Expnav from "../Team/expnav";
import Foot from "../Home/footer";
import Displayblog from "./displayblog";
import { useState } from "react";
import usefetch from "./usefetch";



const Blogshome = () => {
  const { data: items } = usefetch("http://localhost:7000/blogs");
  const [menuitems, setmenuitems] = useState(items);

  function filterItems({ id, category }) {
    if (id === "managment" || category === "Management") {
      setmenuitems(items);
      return;
    }
    const newitems = items.filter(
      (item) => item.id === id || item.category === category
    );
    setmenuitems(newitems);
  }
  return (
    <div>
      <Uppertab />
      <Navbar />
      <Homepic
        abs={abs}
        cont={cont}
        cla="text-[30px] font-bold ml-[560px] -mt-[40px] mb-[40px]"
        h="Our Blogs"
        p="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
      />
      <Expnav
        firstnav="All"
        handleClickTest={filterItems}
        secondnav="Weight Loss Tips"
        thirdnav="Healthy Eating"
        fourthnav="fitness and Exercises"
        fifthnav="Mindset and Motivation"
        sixthnav="Recipes and Meal Planning "
      />
      <Displayblog blog={menuitems} />
      <Foot />
    </div>
  );
};


export default Blogshome;

