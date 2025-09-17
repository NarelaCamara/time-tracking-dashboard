import { useState } from "react";
import { Card } from "../card/Card";
import work from "../../assets/icon-work.svg";

export const CardLogic = ({
  data,
}: {
  data: {
    title: string;
    current: number;
    previous: number;
  };
}) => {
  const [cardData, setCardData] = useState(data);
  const [edit, setEdit] = useState(false);

  const handleEditCard = () => {
    setEdit(true);
  };

  return (
    <div>
      <Card data={cardData} handleEditCard={handleEditCard} />
      {edit && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1C204B] p-8 rounded-4xl z-20">
            <div className="relative flex flex-col my-12 lg:ml-8">
              {/* Fondo con el ícono */}
              <div className="p-6 flex items-center gap-4 bg-[#FF8B64] rounded-2xl mb-8 overflow-hidden">
                <img
                  src={work}
                  className="h-[78px] relative top-[-40px] left-[70%]"
                  alt="work icon"
                />
              </div>
              <h2 className="md:text-[56px] text-[32px] text-white">
                Edit Time
              </h2>
              <div className="flex flex-col justify-center items-center align-middle gap-4">
                <input
                  placeholder="Activity"
                  onChange={(e) =>
                    setCardData({ ...cardData, title: e.target.value })
                  }
                  type="text"
                  className=" text-[32px] text-white"
                />
                <input
                  placeholder="Hours current"
                  onChange={(e) =>
                    setCardData({
                      ...cardData,
                      current: Number(e.target.value),
                    })
                  }
                  type="number"
                  className=" text-[32px] text-white"
                />
                <input
                  placeholder="Hours previous"
                  onChange={(e) =>
                    setCardData({
                      ...cardData,
                      previous: Number(e.target.value),
                    })
                  }
                  type="number"
                  className=" text-[32px] text-white"
                />
                <div className="flex gap-4">
                  <button
                    className="border-2 p-2 px-6 rounded-4xl text-[15px] text-[#BBC0FF]"
                    onClick={() => setEdit(false)}
                  >
                    Save
                  </button>
                  <button
                    className="border-2 p-2 px-6 rounded-4xl text-[15px] text-[#BBC0FF]"
                    onClick={() => {
                      setEdit(false);
                      setCardData(data);
                    }}
                  >
                    Cancel
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
