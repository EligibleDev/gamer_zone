import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import { Button } from "@material-tailwind/react";
import { FiLogIn } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Header = () => {
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
        <header className="sticky top-0 left-0 right-0 z-50 border-b border-b-[rgba(255,255,255,.05)] bg-[var(--black)]">
            <nav className="max-w-screen-xl mx-auto flex justify-between ">
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

                <span className="lg:order-2 order-1 ">
                    <Logo />
                </span>

                <nav className="lg:hidden order-2">
                        mobile browser
                </nav>

                <nav className="flex-1 flex items-center justify-end order-3">
                    <ProfileMenu />

                    <div className="text-right hidden">
                        <Button className="flex justify-between items-center" color="red">
                            Login
                            <FiLogIn className="text-base" />
                        </Button>
                    </div>
                </nav>
            </nav>
        </header>
    );
};

export default Header;
