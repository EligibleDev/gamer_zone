import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import MyButton from "../MyButton/MyButton";

const Services = ({ data }) => {
    return (
        <section className="max-w-screen-xl mx-auto py-24">
            <SectionTitle title="Services" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 px-0 sm:px-5 lg:px-0 gap-0 sm:gap-5 lg:gap-0">
                {data.map((item) => (
                    <div
                        className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-36 bg-[#0a090a] lg:border-b border-2 border-[var(--red)] lg:border-transparent lg:border-b-[rgba(255,255,255,.05)] p-6"
                        key={item?.id}
                    >
                        <img className="w-full lg:w-1/3" src={item?.image} alt="" />
                        <div>
                            <h3 className="text-2xl font-semibold">{item?.name}</h3>
                            <p className="py-3">{item?.description?.slice(0, 100)}...</p>
                            <p>
                                Price:{" "}
                                <span className="font-bold text-[var(--red)]">
                                    ${item?.price}
                                </span>
                            </p>
                        </div>

                        <MyButton text="Details" link={`/services/${item?.id}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

Services.propTypes = {
    data: PropTypes.array,
};
export default Services;
