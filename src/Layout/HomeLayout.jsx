import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";
import Rightnavbar from "../Components/Rightnavbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
         <header>
         <Header></Header>
         <section>
            <LetestNews></LetestNews>
         </section>
        
         </header>
          <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
          </nav>
          <main className="w-11/12 mx-auto pt-4 grid md:grid-cols-12">
          <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
          <section className="col-span-6"><Outlet></Outlet></section>
          <aside className="col-span-3"><Rightnavbar></Rightnavbar></aside>
          </main>
        </div>
    );
};

export default HomeLayout;