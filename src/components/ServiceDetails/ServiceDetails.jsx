/* eslint-disable react/jsx-key */
import { useLoaderData, useParams } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import { BiDollar } from "react-icons/bi";
import toast from "react-hot-toast";
import { useState } from "react";

const ServiceDetails = () => {
    const [toastCalled, setToastCalled] = useState(false);

    const purchaseToast = () => {
        toast.success("Successfully Purchased!");
        setToastCalled(true);
    };

    const purchaseToastError = () => {
        toast.error("Already Purchased");
        setToastCalled(true);
    };

    const data = useLoaderData();
    const { id } = useParams();
    const currentService = data.find((service) => service.id === id);

    return (
        <section
            style={{ backgroundImage: `url('${currentService?.image}')` }}
            className="bg-cover bg-center min-h-screen bg-no-repeat "
        >
            <div className="bg-black bg-opacity-70 w-full min-h-screen">
                <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-24 py-12 lg:py-24 px-8 lg:px-0">
                    <div className="w-full lg:w-2/3 bg-[var(--black)] p-5 flex flex-col justify-center items-start">
                        <img className="w-full" src={currentService?.image} alt="" />

                        <h1 className="text-3xl sm:text-4xl py-4 font-bold">
                            {currentService?.name}
                        </h1>

                        <hr className="border-[3px] h-0 border-[var(--red)] w-32 mb-8" />

                        <h4 className="text-base">
                            {currentService?.description
                                ?.split("\n\n")
                                .map((para, index) => (
                                    <span key={index}>
                                        <p>{para}</p>
                                        <br />
                                    </span>
                                ))}
                        </h4>
                    </div>
                    <div className="w-full lg:w-1/3 bg-[var(--black)] p-5 flex justify-between items-center h-fit">
                        <p>
                            Price:{" "}
                            <span className="font-bold text-[var(--red)]">
                                ${currentService?.price}
                            </span>
                        </p>

                        <MyButton
                            func={toastCalled ? purchaseToastError : purchaseToast}
                            text="Purchase"
                            icon={BiDollar}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
