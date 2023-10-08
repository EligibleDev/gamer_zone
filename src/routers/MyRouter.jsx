import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LoginRegister from "../pages/LoginRegister/LoginRegister";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

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
