import Expnav from "./expnav";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Expert from "./Expert";
import Homepic from "./homepic";
import PropTypes from "prop-types";
import { useState } from "react";

const Teamexp = ({ employee }) => {
  const [menuitems, setmenuitems] = useState(employee);

  function filterItems({ id, category }) {
    if (id === "managment") {
      setmenuitems(employee);
      return;
    }
    const newitems = employee.filter(
      (item) => item.id === id || item.category === category
    );
    setmenuitems(newitems);
  }

  return (
    <div>
      <Homepic
        abs={abs}
        cont={cont}
        cla="text-[30px] font-bold ml-[420px] -mt-[40px] mb-[40px]"
        h="Meet Our Team of Experts"
        p="Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health."
      />
      <Expnav
        firstnav="Management Team"
        secondnav="Nutritionists and dietitians"
        thirdnav="Customer Support"
        fourthnav="Marketing and Communications"
        fifthnav="Technology and Development"
        handleClickTest={filterItems}
      />
      <div className="flex flex-row">
        {menuitems.map((item) => (
          <Expert
            pic={item.pic}
            namo={item.name}
            role={item.role}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Teamexp.propTypes = {
  employee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Teamexp;
