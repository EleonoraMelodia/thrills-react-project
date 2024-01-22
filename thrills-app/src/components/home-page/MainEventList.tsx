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
  const { input, category } = useInputContext();

  const filteredEvents = events.filter((event) => {
    return (
      (category === "" ||
        event.category.toUpperCase() === category.toUpperCase()) &&
      (input === "" ||
        event.location.toUpperCase().includes(input.toUpperCase()))
    );
  });

  return (
    <div className="h-screen overflow-y-auto flex flex-col user items-center w-full">
      <div className="p-10">
        <ul className="flex flex-col w-full">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <li key={index} className={`p-4`}>
                <div className="flex flex-col w-[500px]  text-white font-bold gap-1 bg-black bg-opacity-50 rounded-lg p-4">
                  <h2>{event.title}</h2>
                  <img src={event.img} alt={event.title} />
                  <p>{event.caption}</p>
                  <h4>{event.price}</h4>
                  <div className="flex flex-col">
                    <p>{event.contacts}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p> Search a new destination </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainEventList;
