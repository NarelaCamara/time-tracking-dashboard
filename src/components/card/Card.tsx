import React, { useState } from "react";
import ellipsis from "../../assets/icon-ellipsis.svg";
import { Rutine, type RutineType } from "../../App";

interface CardProps {
  data: {
    title: string;
    current: number;
    previous: number;
    image: string;
    background: string;
  };
  handleEditCard: () => void;
  rutine: RutineType;
}

export const Card: React.FC<CardProps> = ({ data, handleEditCard, rutine }) => {
  const [showEdit, setshowEdit] = useState(false);

  const titleCase = (rutine: RutineType) => {
    return rutine === Rutine.Daily
      ? "Yesterday"
      : rutine === Rutine.Weekly
      ? "Last Week"
      : "Last Month";
  };

  return (
    <>
      <div className="relative flex flex-col my-12 lg:ml-8">
        {/* Fondo con el ícono */}
        <div
          className={`p-6 flex items-center gap-4 ${data.background} rounded-2xl mb-8 overflow-hidden`}
        >
          <img
            src={data.image}
            className="h-[78px] relative top-[-40px] left-[70%]"
            alt="work icon"
          />
        </div>

        {/* Card superpuesta */}
        <div className="absolute top-10 left-0 right-0 p-6 flex flex-col gap-4 bg-[#1C204B] rounded-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] text-white">{data.title}</h3>
            <button onClick={() => setshowEdit(!showEdit)}>
              <img src={ellipsis} className="h-1" alt="ellipsis" />
            </button>

            {showEdit && (
              <div className="absolute top-12 right-4 bg-[#1C204B] rounded-lg shadow-lg bordfer border-[#373f92] ">
                <button
                  onClick={() => handleEditCard()}
                  className={`   font-semibold px-6 py-2 rounded-xl border-2 border-[#23265A] shadow-lg bg-[#1C204B] text-white transition-colors duration-200`}
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-row md:flex-col justify-between lg:justify-start items-center lg:items-start">
            <h2 className="md:text-[56px] text-[32px] text-white">
              {data.current}hrs
            </h2>
            <p className="text-[15px] text-[#BBC0FF]">
              {titleCase(rutine)} - {data.previous}hrs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
