import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo-and-theme/cat-alien.png";
import { useInputContext } from "./InputContext";


type OptionsSidebar = {
  name: string;
  img: string;
  color: string;
}[];

type SidebarProps = {
  options: OptionsSidebar;
  searchEvents: (searchInput: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ options, searchEvents }) => {
  const {
    clicked,
    setClicked,
    input,
    setInput,
    category,
    setCategory,
  } = useInputContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    setClicked(true);

    if (input !== "") {
      searchEvents(input);
      setInput("");
    } else {
      // If no input, show all events without filtering
      searchEvents("");
    }
  };

  const handleCatButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = event.currentTarget.getAttribute("data-category");
    if (selectedCategory) {
      // Toggle category on button click
      setCategory((prevCategory) => (prevCategory === selectedCategory ? "" : selectedCategory));
      searchEvents(input);
    }
  };

  const handleResetButtonClick = () => {
    setCategory("");
    setInput("");
    searchEvents("");
  };


  return (
    <>
      <div className="flex flex-col h-screen gap-3 p-4 text-sm justify-start bg-opacity-70 bg-purple-300 rounded-lg">
        <Link to="/">
          <span className="flex">
            <h3>Main page </h3> <img className="w-[70px]" src={img} alt="#" />
          </span>
        </Link>

        <h2>Where is your thrill destination? </h2>
        <input
          onChange={handleInputChange}
          type="text"
          className="p-1 w-[60%] rounded-lg"
        />
        <button
          onClick={handleButtonClick}
          className="rounded-xl bg-purple-800 text-white p-2"
        >
          GO!
        </button>

        <h3>
          Kind of thrill:
          <ul className="grid grid-cols-2 gap-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`bg-${option.color} p-3 w-20 h-20 rounded-lg text-xs shadow-xl flex flex-col justify-center`}
              >
                <button
                  onClick={handleCatButtonClick}
                  data-category={option.name}
                >
                  <img className="w-20" src={option.img} alt="option image" />
                  <span>{option.name}</span>
                </button>
              </li>
            ))}
            <li>
            

              <button onClick={handleResetButtonClick}
                className="rounded-xl bg-purple-800 text-white p-2 mt-2">Reset all</button>
              
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-4 ">
            <li className="p-2 shadow-lg">
              <a href="">Special Plans</a>
            </li>
            <li className="p-2 shadow-lg">
              <a href=""> Make a gift </a>
            </li>
            <li className="p-2 shadow-lg">
              <a href="">Local Guide</a>
            </li>
            <span className="p-2 text-slate-600 shadow-md">
              <Link to="/">Logout</Link>
            </span>
          </ul>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
