import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "",
                element: <Navigate to={'/caregory/01'}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                
            },
        ]
    },
    
    {
        path: "/news",
        element: <h1>hello</h1>,
    },
    {
        path: "auth",
        element: <h1>login</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default Router;