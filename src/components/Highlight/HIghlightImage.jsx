import PropTypes from "prop-types";

const HIghlightImage = ({ img }) => {
    return (
        <>
            <img className="lg:w-40 w-28" src={`highlight-${img}.png`} alt="" />
        </>
    );
};

HIghlightImage.propTypes = {
    img: PropTypes.number,
};
export default HIghlightImage;
