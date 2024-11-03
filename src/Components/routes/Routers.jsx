import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorHandal from "../Error/ErrorHandal";
import Coffees from "../Pages/Coffees";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import CoffeCards from "../CoffeCards/CoffeCards";
import CoffeesDitals from "../Pages/CoffeesDitals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorHandal></ErrorHandal>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/catagory/:catagory',
                        element: <CoffeCards></CoffeCards>,
                        loader: () => fetch('../coffees.json')
                    },
                    {
                        path: '/',
                        element: <CoffeCards></CoffeCards>,
                        loader: () => fetch('../coffees.json')
                    },
                ]
            },
            {
                path: '/Coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('../coffees.json')
            },
            {
                path: '/Dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/coffee/:id',
                element: <CoffeesDitals></CoffeesDitals>,
                loader: () => fetch('../coffees.json')
            },
        ]
    },
]);

export default router;