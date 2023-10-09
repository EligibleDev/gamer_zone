import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useEffect(() => {
        Aos.init();
    }, []);

    return (<>
        <Helmet>
            <title>FAQ | Gamer Zone</title>
        </Helmet>
        <section className="bg-[url('/faq-bg.jpg')] bg-cover bg-center-top bg-no-repeat min-h-screen">
            <div className="min-h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center ">
                <div className=" max-w-screen-xl py-12 lg:py-24 px-5 lg:px-0 flex justify-center flex-col shadow-[0_5px_10px_0_rgba(0,0,0,.35)]">
                    <SectionTitle title="FAQ" />

                    <div>
                        <Accordion
                            data-aos="fade-up"
                            open={open === 1}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(1)}
                                className={`border-b-0 transition-colors ${
                                    open === 1 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                How do I register for an event?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                To register for an event, navigate to the Events page.
                                Select the event you are interested in and click on it to
                                access the event details. Follow the registration
                                instructions provided on the event page.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                            open={open === 2}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(2)}
                                className={`border-b-0 transition-colors ${
                                    open === 2 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                What are the payment options for event registration?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                We currently accept payments via credit/debit cards and
                                PayPal for event registrations. Specific payment options
                                may vary by event, so please check the event details for
                                payment information.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="500"
                            open={open === 3}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(3)}
                                className={`border-b-0 transition-colors ${
                                    open === 3 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Can I participate in an event if I am a beginner or casual
                                gamer?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Absolutely! We welcome gamers of all skill levels. Many of
                                our events have divisions or categories to accommodate
                                players of varying skill levels, ensuring a fair and
                                enjoyable experience for everyone
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="700"
                            open={open === 4}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(4)}
                                className={`border-b-0 transition-colors ${
                                    open === 4 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Are there age restrictions for participating in events?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Age restrictions can vary depending on the event and game.
                                Please review the event details for specific age
                                requirements. Minors may need parental consent to
                                participate.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="900"
                            open={open === 5}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(5)}
                                className={`border-b-0 transition-colors ${
                                    open === 5 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                How do I contact the event organizers for questions or
                                assistance?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                You can reach out to our support team through the Contact
                                Us page on our website. Well be happy to assist you with
                                any questions or concerns you may have.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="1100"
                            open={open === 6}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(6)}
                                className={`border-b-0 transition-colors ${
                                    open === 6 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                What happens if I need to cancel my event registration?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Event cancellation policies may vary, so its essential to
                                review the specific events cancellation policy provided
                                during registration. In most cases, cancellations made
                                within a certain timeframe may be eligible for a refund.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="1300"
                            open={open === 7}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(7)}
                                className={`border-b-0 transition-colors ${
                                    open === 7 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                How are prizes and rewards distributed for tournament
                                winners?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Prizes and rewards are typically distributed as specified
                                in the events rules and regulations. Winners will be
                                contacted by our team after the event to arrange prize
                                delivery.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="1500"
                            open={open === 8}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(8)}
                                className={`border-b-0 transition-colors ${
                                    open === 8 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                Are spectators allowed at your events?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                Yes, we encourage spectators to join us and cheer for the
                                participants. Event details will indicate whether there is
                                an admission fee for spectators.
                            </AccordionBody>
                        </Accordion>
                        <Accordion    data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="1700"
                            open={open === 9}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(9)}
                                className={`border-b-0 transition-colors ${
                                    open === 9 ? "text-white hover:text-[var(--red)]" : ""
                                }`}
                            >
                                How do I stay updated on upcoming events and news?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal text-white">
                                You can stay informed about our upcoming events, news, and
                                announcements by visiting our News or Blog page and by
                                following us on our social media channels.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FAQ;
