import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import { IconButton, Collapse } from "@material-tailwind/react";
import { FiLogIn } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import { useState } from "react";
import MyButton from "../MyButton/MyButton";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

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
    ];

    return (
        <header className="shadow-[0_5px_10px_0_rgba(0,0,0,.35)] sticky top-0 left-0 right-0 z-50 border-b border-b-[rgba(255,255,255,.05)] bg-[var(--black)]">
            <nav className="max-w-screen-xl mx-auto flex justify-between lg:items-center">
                <nav className="lg:flex flex-1 gap-2 justify-center items-end lg:order-1 hidden">
                    {navLinks.map((link) => (
                        <NavLink
                            className="border-b-[6px] border-[var(--black)] hover:border-[var(--red)] h-full flex justify-center items-center transition duration-500 text-xs tracking-wider uppercase font-bold"
                            key={link?.name}
                            to={link?.path}
                        >
                            <span className="p-6">{link?.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <span className="lg:order-2 order-1">
                    <Logo />
                </span>

                <nav className="lg:hidden order-3 flex-1 text-right">
                    <IconButton
                        size="sm"
                        color="white"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="mt-4"
                    >
                        <HiMenu className="h-6 w-6" />
                    </IconButton>

                    <Collapse open={isNavOpen} className="overflow-scroll">
                        {navLinks.map((link) => (
                            <NavLink
                                className=" hover:border-[var(--red)] flex flex-col justify-center items-center transition duration-500 text-xs tracking-wider uppercase font-bold "
                                key={link?.name}
                                to={link?.path}
                            >
                                <span className="p-1">{link?.name}</span>
                            </NavLink>
                        ))}
                    </Collapse>
                </nav>

                <nav className="flex-1 flex lg:items-center items-start justify-end order-3 mt-4 lg:mt-0 mr-4 lg:mr-0">
                    <span className="hidden">
                        <ProfileMenu />
                    </span>

                    <span className="">
                        <MyButton
                            link="/login-register/login"
                            icon={FiLogIn}
                            text="login"
                        />
                    </span>
                </nav>
            </nav>
        </header>
    );
};

export default Header;
