import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-300 m-14  px-9">
           <p className="bg-[#D72050] text-base-100 px-8 py-4  text-center ">Letest</p>
           <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia quos. Nisi, rem. Adipisci.</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia quos. Nisi, rem. Adipisci.</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia quos. Nisi, rem. Adipisci.</Link>
           </Marquee>
        </div>
    );
};

export default LetestNews;