import { Outlet } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const LoginRegister = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="">
            <div className="bg-[url('/login-register-bg.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full flex justify-center flex-col shadow-[0_5px_10px_0_rgba(0,0,0,.35)]">
                <SectionTitle title="Login/ Register" />
            </div>

            <div className="max-w-screen-xl mx-auto py-24 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-1/2 hidden lg:block">
                    <h1 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-4xl text-left font-bold uppercase">
                        Login or Register to Continue
                    </h1>

                    <hr data-aos="fade-up" className="border-[3px] h-0 border-[var(--red)]  w-32 mt-4" />
                </div>
                <div data-aos="fade-left" className="w-1/2">
                  <Outlet/>
                </div>
            </div>
        </section>
    );
};

export default LoginRegister;
