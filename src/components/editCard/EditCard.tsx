import { useState } from "react";
import { Rutine, type RutineType } from "../../App";

type CardData = {
  image: string;
  title: string;
  current: number;
  previous: number;
  background: string;
  // add other fields if needed
};

interface EditCardProps {
  setEdit: (edit: boolean) => void;
  data: CardData;
  rutine: RutineType;
}

export const EditCard = ({ setEdit, data, rutine }: EditCardProps) => {
  const [cardData, setCardData] = useState(data);

  const titleCase = (rutine: RutineType) => {
    return rutine === Rutine.Daily
      ? "Yesterday"
      : rutine === Rutine.Weekly
      ? "Last Week"
      : "Last Month";
  };

  return (
    <div className="relative flex flex-col my-12 lg:ml-8    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
      {/* Fondo con el ícono */}
      <div
        className={`p-6 flex items-center gap-4 ${data.background} rounded-2xl mb-8 overflow-hidden `}
      >
        <img
          src={data.image}
          className="h-[78px] relative top-[-40px] left-[70%]"
          alt="work icon"
        />
      </div>

      {/* Card superpuesta */}
      <div className="absolute top-10 left-0 right-0 p-6 flex flex-col gap-4 bg-[#1C204B] rounded-2xl w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-[18px] text-white">{data.title}</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <div className="flex flex-col items-start w-full">
            <label
              className="text-[15px] text-[#BBC0FF] mb-1 m-2   "
              htmlFor="current-hours"
            >
              Hours
            </label>
            <input
              id="current-hours"
              placeholder="Hours"
              onChange={(e) =>
                setCardData({
                  ...cardData,
                  current: Number(e.target.value),
                })
              }
              type="number"
              className="md:text-[56px] text-[32px] text-white bg-[#1C204B] border-b border-[#BBC0FF] w-full"
              value={cardData.current}
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label
              className="text-[15px] text-[#BBC0FF] mb-1"
              htmlFor="previous-hours"
            >
              {titleCase(rutine)}
            </label>
            <div className="flex items-center">
              <input
                id="previous-hours"
                placeholder="Hours previous"
                onChange={(e) =>
                  setCardData({
                    ...cardData,
                    previous: Number(e.target.value),
                  })
                }
                type="number"
                className={`text-[15px] text-[#BBC0FF] bg-[#23265A] border-b-2 border-[#23265A] w-20 px-3 py-2 rounded-l-lg focus:outline-none focus:border-[#FFD6C2] transition-all duration-200`}
                value={cardData.previous}
              />
              <span
                className={`text-[15px] text-[#BBC0FF] bg-[#23265A] px-3 py-2 rounded-r-lg border-b-2 border-[#23265A]  `}
              >
                hrs
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className={` text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 ${data.background} `}
            onClick={() => setEdit(false)}
          >
            Save
          </button>
          <button
            className={`font-semibold px-6 py-2 rounded-xl border-2 border-[#23265A] shadow-lg bg-[#1C204B] text-white transition-colors duration-200`}
            onClick={() => {
              setEdit(false);
              setCardData(data);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
