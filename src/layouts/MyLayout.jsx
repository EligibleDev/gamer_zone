import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MyLayout = () => {
    return (
        <>
            <Toaster />
            <Header />
            <div style={{ minHeight: `24rem` }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MyLayout;
