import React from "react";
import Sidebar from "./Sidebar";
import adventureImg from "../../assets/dabbing.png";
import chillImg from "../../assets/chill.png";
import nightImg from "../../assets/dj.png";
import extremeImg from "../../assets/fire3.png";
import eventList from "./event_list.json";
import MainEventList from "./MainEventList";
import { InputProvider } from "./InputContext";

export const UserHome = () => {
  const options = [
    {
      name: "Adventure",
      img: adventureImg,
      color: "yellow-500",
    },
    {
      name: "Chill out",
      img: chillImg,
      color: "pink-500",
    },
    {
      name: "Night out",
      img: nightImg,
      color: "blue-500",
    },
    {
      name: "Extreme experience",
      img: extremeImg,
      color: "gold-500",
    },
  ];

  return (
    <div className="grid grid-cols-2">
      <InputProvider>
        <Sidebar options={options} />
        <MainEventList events={eventList} />
      </InputProvider>
    </div>
  );
};
