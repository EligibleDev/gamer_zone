import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./routers/MyRouter";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <RouterProvider router={MyRouter} />
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>
);
