import { Link } from "react-router-dom";
import usericon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to="/">Home </Link>
                <Link to="/carrer">Careear </Link>
                <Link to="/about">About </Link>
            </div>
            <div className="login flex gap-2">
                <img src={usericon} alt="" />
                <button className="btn bg-black text-white p-3 ">Login</button>
            </div>
           
        </div>
    );
};

export default Navbar;