import Uppertab from '../Home/Uppertab'
import Navbar from '../Home/Navbar'
import Homepic from '../Team/homepic'
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Contactnav from './contactnav';
import Contactusform from './contactusform';
import Foot from "../Home/footer";
const Contactushome = () => {
  return (
    <div>
      <Uppertab />
      <Navbar />
      <Homepic
        abs={abs}
        cont={cont}
        cla="text-[30px] font-bold ml-[560px] -mt-[40px] mb-[40px]"
        h="Contact Us"
        p="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods" />
      <Contactnav />
      <Contactusform />
      <Foot />
    </div>
  )
}

export default Contactushome