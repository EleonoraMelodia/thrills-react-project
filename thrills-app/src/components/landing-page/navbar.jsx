import logo from "../../assets/Thrills LIGHTMODE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ options }) => {
  return (
    <>
      <div className="flex text-2xl md:text-sm relative">
        <span className="absolute top-[-1.5rem]">
          <img className="w-40" src={logo} alt="logo" />
        </span>
        <ul className="flex p-2 md:gap-2 absolute right-16">
          <li>
            <span className="text-2xl lg:hidden">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </li>
          <span className="hidden  lg:flex md:gap-4">
            {options.map((link, index) => (
              <li className="hover:text-xl" key={index}>
                <a href="#"> {link} </a>{" "}
              </li>
            ))}
          </span>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
