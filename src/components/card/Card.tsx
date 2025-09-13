import React, { useState } from "react";
import ellipsis from "../../assets/icon-ellipsis.svg";
import work from "../../assets/icon-work.svg";

interface CardProps {
  data: {
    title: string;
    current: number;
    previous: number;
  };
  handleEditCard: () => void;
}

export const Card: React.FC<CardProps> = ({ data, handleEditCard }) => {
  const [showEdit, setshowEdit] = useState(false);

  return (
    <>
      <div className="relative flex flex-col my-12 lg:ml-8">
        {/* Fondo con el ícono */}
        <div className="p-6 flex items-center gap-4 bg-[#FF8B64] rounded-2xl mb-8 overflow-hidden">
          <img
            src={work}
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
              <div className="absolute top-10 right-6 bg-[#1C204B] p-2 rounded-lg shadow-lg">
                <button
                  onClick={() => handleEditCard()}
                  className="bg-[#1C204B] p-6 rounded-lg opacity-100 hover:opacity-70 text-white"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-row md:flex-col justify-between lg:justify-start items-center lg:items-start">
            <h2 className="md:text-[56px] text-[32px] text-white">32hrs</h2>
            <p className="text-[15px] text-[#BBC0FF]">Last Week - 36hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};
