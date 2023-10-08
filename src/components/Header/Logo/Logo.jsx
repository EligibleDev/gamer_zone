import logo from "/logo.png"
import "./logo.css"
import { Link } from "react-router-dom";

const Logo = () => {

      return (
            <Link to="/" className="logo-container border border-[rgba(255,255,255,.05)]">
                  <img className="w-1/2 z-50 absolute" src={logo} alt="" />
            </Link>
      );
};

export default Logo;