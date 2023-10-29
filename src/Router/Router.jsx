import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";


const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/services/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path : '/mybookings'
            }
        ]
    }
])

export default Router;