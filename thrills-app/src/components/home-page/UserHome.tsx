import React from "react";
import Sidebar from "./Sidebar";
import adventureImg from "../../assets/logo-and-theme/dabbing.png";
import chillImg from "../../assets/logo-and-theme/chill.png";
import nightImg from "../../assets/logo-and-theme/dj.png";
import extremeImg from "../../assets/logo-and-theme/snowboard.png";
import eventList from "./event_list.json";
import MainEventList from "./MainEventList";
import { InputProvider } from "./InputContext";
import { useState } from "react";

export const UserHome = () => {
  const initialEvents = eventList;

  const options = [
    {
      name: "Adventure",
      img: adventureImg,
      color: "yellow-500",
    },
    {
      name: "Chill Out",
      img: chillImg,
      color: "pink-500",
    },
    {
      name: "Night Out",
      img: nightImg,
      color: "blue-500",
    },
    {
      name: "Extreme Experience",
      img: extremeImg,
      color: "gold-500",
    },
  ];

  const [events, setEvents] = useState(initialEvents);

  const searchEvents = (searchInput: string) => {
    const filteredEvents = initialEvents.filter((event) =>
      event.location.toUpperCase().includes(searchInput.toUpperCase())
    );

    setEvents(filteredEvents);
  };

 return (
    <div className=" flex">
      <InputProvider>
        <Sidebar options={options} searchEvents={searchEvents} />
        <MainEventList events={events} />
      </InputProvider>
    </div>
  );
};
