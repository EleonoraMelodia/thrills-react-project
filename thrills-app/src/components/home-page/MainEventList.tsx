import React from "react";
import { useInputContext } from "./InputContext";


type AllEvents = {
  id: number;
  location: string;
  img: string;
  title: string;
  caption: string;
}[];


const MainEventList = ({ events }: { events: AllEvents }) => {
  const { input } = useInputContext();

  return (
    <div className="p-10 eventShowing ">
      <ul className="flex flex-col w-[60%] ">
        {events.map((event, index) =>
           (
            <li key={index} className={`${event.location.toUpperCase() === input.toUpperCase() ? "visible" : "hidden" }  `}>
              <div className="flex flex-col">
                <img src={event.img} alt={event.title} />
                <h2>{event.title}</h2>
                <p>{event.caption}</p>
              </div>
            </li>
          
          )
        )}
          </ul>
          <h1 className="text-xl"> Search your destination </h1>
    </div>
  );
};

export default MainEventList;
