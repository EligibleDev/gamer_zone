import PropTypes from "prop-types";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ title }) => {
    useEffect(() => {
        Aos.init();
    }, []);
    
    return (
        <>
            <h1
                data-aos="fade-up"
                className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold uppercase"
            >
                {title}
            </h1>

            <hr
                data-aos="fade-up"
                className="border-[3px] h-0 border-[var(--red)] w-32 mx-auto mb-8 mt-4"
            />
        </>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
};
export default SectionTitle;
