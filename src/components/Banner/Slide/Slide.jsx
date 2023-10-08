import { BsMouseFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Slide = ({ img, title, body }) => {
    return (
        <div
            style={{ backgroundImage: `url('/banner-${img}.jpg')` }}
            className="bg-cover bg-no-repeat bg-center h-full flex flex-col items-center justify-center relative"
        >
            <h1 className="lg:text-7xl text-3xl sm:text-4xl text--white font-extrabold text-center lg:w-3/4 sm:w-8/12 lg:w-3/4 uppercase">
                {title}
            </h1>

            <p className="text-center text-base lg:w-3/5 sm:w-4/5 w-full mt-4">{body}</p>

            <a href="#cta" className="absolute bottom-24 text-center">
                <BsMouseFill className="text-white text-3xl transition duration-500 rotate-180" />
            </a>
        </div>
    );
};

Slide.propTypes = {
    img: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
};
export default Slide;
