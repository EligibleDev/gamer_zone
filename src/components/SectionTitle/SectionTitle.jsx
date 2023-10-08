import PropTypes from "prop-types";


const SectionTitle = ({title}) => {
    return (
        <>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold uppercase">
                {title}
            </h1>

            <hr className="border-[3px] h-0 border-[var(--red)] w-32 mx-auto mb-8 mt-4" />
        </>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
};
export default SectionTitle;
