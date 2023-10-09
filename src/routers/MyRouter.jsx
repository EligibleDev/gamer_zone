import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import LoginRegister from "../pages/LoginRegister/LoginRegister";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import FAQ from "../pages/FAQ/FAQ";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/about",
                element: (
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>
                ),
            },
            {
                path: "/faq",
                element: (
                    <PrivateRoute>
                        <FAQ />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login-register",
                element: <LoginRegister />,
                children: [
                    {
                        path: "/login-register/login",
                        element: <Login />,
                    },
                    {
                        path: "/login-register/register",
                        element: <Register />,
                    },
                ],
            },
            {
                path: "services/:id",
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
                loader: () => fetch("/data.json"),
            },
        ],
    },
]);

export default MyRouter;
