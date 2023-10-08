import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LoginRegister from "../pages/LoginRegister/LoginRegister";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login-register",
                element: <LoginRegister />,
                children: [
                    {
                        path: "/login-register/login",
                        element: <Login/>
                    },
                    {
                        path: "/login-register/register",
                        element: <Register/>
                    }
                ]
            },
            {
                path: "services/:id",
                element: <ServiceDetails />,
                loader: () => fetch("/data.json"),
            },
        ],
    },
]);

export default MyRouter;
