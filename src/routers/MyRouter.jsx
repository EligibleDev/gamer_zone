import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Cotact/Contact";

const MyRouter = createBrowserRouter([
      {
            path: "/",
            element: <MyLayout/>,
            children: [
                  {
                        path: "/",
                        element: <Home/>,
                  },
                  {
                        path: "/about",
                        element: <About/>,
                  },
                  {
                        path: "/contact",
                        element: <Contact/>,
                  }
            ]
      },
])

export default MyRouter;