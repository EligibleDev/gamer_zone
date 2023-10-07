import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
    FaFacebook,
    FaXTwitter,
    FaYoutube,
    FaTwitch,
    FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Login",
            path: "/login",
        },
    ];

    return (
        <footer
            style={{ backgroundImage: `url('/footer-bg.jpg')` }}
            className="bg-cover bg-no-repeat bg-center h-40 md:h-60 flex flex-col justify-center items-center gap-8 "
            id="footer"
        >
            <nav className="flex justify-center items-center gap-4 border-b-[6px] border-b-[var(--red)] w-full">
                {navLinks.map((link) => (
                    <NavLink
                        className="transition duration-500 text-xs tracking-wider uppercase font-bold sm:p-6 p-4"
                        key={link?.name}
                        to={link?.path}
                    >
                        {link?.name}
                    </NavLink>
                ))}
            </nav>

            <nav className="flex gap-3">
                <a href="#">
                    <FaFacebook className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaXTwitter className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaYoutube className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaTwitch className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaInstagram className="hover:text-[var(--red)] transition duration-500" />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
