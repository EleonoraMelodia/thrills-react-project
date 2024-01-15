import React from "react";
import logo from "../../assets/Thrills LIGHTMODE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type NavbarOptions = {
  name: string;
  path: string;
}[];


const Navbar =({ options }: { options: NavbarOptions }) => {
  return (
    <>
      <div className="flex text-2xl mb-32 md:text-sm relative">
        <span className="absolute mb-4 top-[-1.5rem]">
          <img className="w-[250px]" src={logo} alt="logo" />
        </span>
        <ul className="flex p-2 md:gap-2 absolute right-16">
          <li>
            <span className="text-2xl md:hidden">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </li>
          <span className="hidden md:flex md:gap-4 ">
            {options.map((link, index) => (
              <Link to={link.path} className="hover:text-xl" key={index}>
                 {link.name}
              </Link>
            ))}
          </span>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
