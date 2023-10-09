import { ImLink } from "react-icons/im";
import MyButton from "../MyButton/MyButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";

const CallToAction = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section
            data-aos="fade-right"
            id="cta"
            className="shadow-[0_5px_10px_0_rgba(0,0,0,.35)] py-24 bg-[url('/CTA.png')] bg-contain bg-left bg-no-repeat"
        >
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="flex flex-col justify-center items-center w-full sm:w-2/3 lg:w-3/6 mx-auto">
                    <SectionTitle title="Welcome to the Ultimate Gaming Experience" />

                    <p
                        data-aos="fade-up"
                        className="text-center text-sm px-3 sm:px-0 sm:text-base pb-5"
                    >
                        Ready to level up your gaming experience? Join us now and be part
                        of the excitement! Grab your controllers, assemble your team, and
                        embark on an epic gaming journey filled with challenges,
                        victories, and unforgettable moments. Do not miss out—click below
                        to start your adventure!
                    </p>

                    <MyButton
                        icon={ImLink}
                        text="Join Now"
                        link="/login-register/register"
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
