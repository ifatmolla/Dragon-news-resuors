import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Findus = () => {
    return (
        <div>
            <button className="font-semibold mb-3">Find us on</button>
            <div className="join flex *:bg-base-100 space-y-2 join-vertical">
                <button className="btn join-item justify-start"><FaFacebook /></button>
                <button className="btn join-item justify-start"><FaInstagram /></button>
                <button className="btn join-item justify-start"><FaFacebook /></button>
            </div>
        </div>
    );
};

export default Findus;