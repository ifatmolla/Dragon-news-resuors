import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
       <div className="flex flex-col justify-center p-2 items-center gap-2 ">
         
           <img className="w-[300px]" src={logo} alt="" />
       <h1 className="text-gray-400 font-poppins">Journalism Without Fear or Favour</h1>
       <p>{moment().format('MMMM Do YYYY')}</p>
       </div>
    );
};

export default Header;