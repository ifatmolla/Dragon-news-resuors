import {  useParams } from "react-router-dom";
import Newscards from "../Components/Newscards";
import { useEffect, useState } from "react";

const CategoryNews = () => {
   const [data, setData] = useState([])
   const {id} = useParams()
   useEffect(()=> {
   fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
   .then(res => res.json())
   .then(product => {
    setData(product.data)
   })
   }, [id])
    return (
        <div>
        <h2 className="font-semibold mb-3">Dragon News Home</h2>

        <div>
            {
                data.map((singleNews) =>(
                    <Newscards key={singleNews._id} news={singleNews}></Newscards>
                ))
            }
        </div>
        </div>
    );
};

export default CategoryNews;