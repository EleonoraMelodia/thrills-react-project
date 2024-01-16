import React from "react";
import { useInputContext } from "./InputContext";

type AllEvents = {
  id: number;
  location: string;
  img: string;
  title: string;
  caption: string;
  price: string;
  category: string;
  contacts: string;
}[];

const MainEventList = ({ events }: { events: AllEvents }) => {
  const { input } = useInputContext();

  return (
    <div className="user relative w-screen h-screen">
 
      <div className="p-10 absolute inset-0 overflow-y-auto w-screen">
        <ul className="flex flex-col w-[40%]">
          {events.map((event, index) => (
            <li
              key={index}
              className={`${
                event.location.toUpperCase() === input.toUpperCase()
                  ? "visible"
                  : "hidden"
              } p-4`}
            >
              <div className="flex flex-col text-white font-bold gap-1 bg-black bg-opacity-50 rounded-lg p-4">
                <h2>{event.title}</h2>
           
                <img src={event.img} alt={event.title} />
                <p>{event.caption}</p>
                <h4>{event.price}</h4>
                <div className="flex flex-col">
                  <p>{event.contacts}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h1 className="text-4xl text-white">Search your destination</h1>
      </div>
    </div>
  );
};

export default MainEventList;

