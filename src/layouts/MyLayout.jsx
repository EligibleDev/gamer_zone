import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import BackToTop from "../components/BackToTop/BackToTop";

const MyLayout = () => {
    return (
        <>
            <Toaster />
            <Header />
            <div style={{ minHeight: `24rem` }}>
                <Outlet />
            </div>
            <Footer />
            <BackToTop/>
        </>
    );
};

export default MyLayout;
