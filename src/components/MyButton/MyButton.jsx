import { Button } from "@material-tailwind/react";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyButton = ({ text, icon, link }) => {
    return (
        <Button
            style={{
                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
            }}
            className="bg-[var(--red)] rounded-br-none rounded-tl-none"
        >
            <Link className="flex gap-1 justify-between items-center" to={link}>
                {text}
                {React.createElement(icon, {
                    className: `text-base`,
                })}
            </Link>
        </Button>
    );
};

MyButton.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    link: PropTypes.string,
};
export default MyButton;
