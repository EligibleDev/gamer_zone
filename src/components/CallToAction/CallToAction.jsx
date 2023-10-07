import { ImLink } from "react-icons/im";
import MyButton from "../MyButton/MyButton";

const CallToAction = () => {
    return (
        <section className=" py-24 bg-[url('/CTA.png')] bg-contain bg-left bg-no-repeat">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-5 w-full sm:w-2/3 lg:w-3/6 mx-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold uppercase">
                        Welcome to the Ultimate Gaming Experience
                    </h1>

                    <hr className="border-[3px] h-0 border-[var(--red)] w-32" />

                    <p className="text-center text-sm px-3 sm:px-0 sm:text-base">
                        Ready to level up your gaming experience? Join us now and be part
                        of the excitement! Grab your controllers, assemble your team, and
                        embark on an epic gaming journey filled with challenges,
                        victories, and unforgettable moments. Do not miss out—click below
                        to start your adventure!
                    </p>

                  <MyButton icon={ImLink} text="Join Now" link="/login"/>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
