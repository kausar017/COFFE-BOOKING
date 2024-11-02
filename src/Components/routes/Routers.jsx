import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorHandal from "../Error/ErrorHandal";
import Coffees from "../Pages/Coffees";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorHandal></ErrorHandal>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Coffees',
                element: <Coffees></Coffees>
            },
            {
                path: '/Dashbord',
                element: <Dashbord></Dashbord>
            },
        ]
    },
]);

export default router;