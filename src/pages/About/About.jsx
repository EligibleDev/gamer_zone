import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section>
            <div className="bg-[url('/about-bg.jpg')] bg-cover bg-top bg-no-repeat h-96 w-full flex justify-center flex-col shadow-[0_5px_10px_0_rgba(0,0,0,.35)]">
                <SectionTitle title="About Us" />
            </div>

            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 justify-between items-center px-5 lg:px-0 py-24">
                    <div className="w-full lg:w-1/2">
                        <h1
                            data-aos="fade-up"
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase"
                        >
                            Our Mission
                        </h1>

                        <hr
                            data-aos="fade-up"
                            className="border-[3px] h-0 border-[var(--red)] w-32 mb-8 mt-4"
                        />

                        <p
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            className="text-sm px-3 sm:px-0 sm:text-base pb-5"
                        >
                            At Gamer Zone, we are passionate about bringing gamers
                            together through exciting and well-organized gaming events.
                            Our mission is to provide a platform where gamers of all skill
                            levels can connect, compete, and celebrate their love for
                            gaming. We believe in fostering a vibrant gaming community
                            that shares the same enthusiasm for e-sports and competitive
                            gaming.
                        </p>
                    </div>
                    <img
                        data-aos="fade-left"
                        className="w-full lg:w-1/2"
                        src="https://i.ibb.co/fVgvjCD/gaming-tournaments.jpg"
                        alt=""
                    />
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-16 justify-between items-center px-5 lg:px-0 pb-24">
                    <div className="w-full lg:w-1/2">
                        <h1
                            data-aos="fade-up"
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase"
                        >
                            Who We Are
                        </h1>

                        <hr
                            data-aos="fade-up"
                            className="border-[3px] h-0 border-[var(--red)] w-32 mb-8 mt-4"
                        />

                        <p
                            data-aos="fade-up"
                            className="text-sm px-3 sm:px-0 sm:text-base pb-5"
                        >
                            Gamer Zone is a dedicated team of gaming enthusiasts who have
                            come together to create memorable gaming experiences. With a
                            collective background in event management and a deep
                            understanding of the gaming industry, we are committed to
                            delivering high-quality and enjoyable gaming events for our
                            participants.
                        </p>
                    </div>
                    <img data-aos="fade-right"
                        className="w-full lg:w-1/2"
                        src="https://i.ibb.co/HFgPw3V/Sponsorship-Opportunities.jpg"
                        alt=""
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 justify-between items-center px-5 lg:px-0 pb-24">
                    <div className="w-full lg:w-1/2">
                        <h1 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
                            Our Mission
                        </h1>

                        <hr data-aos="fade-up" className="border-[3px] h-0 border-[var(--red)] w-32 mb-8 mt-4" />

                        <p data-aos="fade-up" className="text-sm px-3 sm:px-0 sm:text-base pb-5">
                            At Gamer Zone, we are passionate about bringing gamers
                            together through exciting and well-organized gaming events.
                            Our mission is to provide a platform where gamers of all skill
                            levels can connect, compete, and celebrate their love for
                            gaming. We believe in fostering a vibrant gaming community
                            that shares the same enthusiasm for e-sports and competitive
                            gaming.
                        </p>
                    </div>
                    <img data-aos="fade-left"
                        className="w-full lg:w-1/2"
                        src="https://i.ibb.co/wCF5Nm6/19197318.jpg"
                        alt=""
                    />
                </div>

                <div className="flex flex-col lg:flex-row-reverse pb-24 px-5 lg:px-0 gap-5 lg:gap-16 justify-between items-center">
                    <div className="w-full lg:w-1/2">
                        <h1 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
                            Our Mission
                        </h1>

                        <hr data-aos="fade-up" className="border-[3px] h-0 border-[var(--red)] w-32 mb-8 mt-4" />
                    </div>

                    <div data-aos="fade-right" className="w-full lg:w-1/2">
                        <Accordion
                            open={open === 1}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(1)}
                                className={`border-b-0 transition-colors ${
                                    open === 1 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Competitive Gaming
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                We&apos;re not always in the position that we want to be
                                at. We&apos;re constantly growing. We&apos;re constantly
                                making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(2)}
                                className={`border-b-0 transition-colors ${
                                    open === 2 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Community Building
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Beyond the competitions, we believe in building a strong
                                gaming community. Our events are not just about winning;
                                they are about connecting with like-minded individuals who
                                share your passion.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 3}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(3)}
                                className={`border-b-0 transition-colors ${
                                    open === 3 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Professionalism
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                We take pride in our professional approach to event
                                management. Our team works diligently to ensure that every
                                event is well-organized, fair, and enjoyable for all
                                participants.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
