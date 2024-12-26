import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [category, setCategory]= useState([])
    useEffect(()=> {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=> res.json())
        .then((data)=> setCategory(data.data.news_category))
    }, [])
    return (
        <div>
          <h2 className="font-semibold text-2xl ">All Caterogy ({category.length})</h2>
          <div className="  gap-2 flex flex-col ">
            {category.map((categore)=> (<NavLink to={`/category/${categore.category_id}`} className=" p-2 btn btn-ghost" key={categore.category_id}>{categore.category_name}</NavLink>))}
        </div>
        </div>
       
    );
};

export default LeftNavbar;