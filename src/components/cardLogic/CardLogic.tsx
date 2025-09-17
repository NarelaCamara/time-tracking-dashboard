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
    <div key={cardData.title}>
      <Card data={cardData} handleEditCard={handleEditCard} />
      {edit && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

          <>
            <div className="relative flex flex-col my-12 lg:ml-8    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full   z-20">
              {/* Fondo con el ícono */}
              <div className="p-6 flex items-center gap-4 bg-[#FF8B64] rounded-2xl mb-8 overflow-hidden">
                <img
                  src={work}
                  className="h-[78px] relative top-[-40px] left-[70%]"
                  alt="work icon"
                />
              </div>

              {/* Card superpuesta */}
              <div className="absolute top-10 left-0 right-0 p-6 flex flex-col gap-4 bg-[#1C204B] rounded-2xl w-full">
                <div className="flex justify-between items-center">
                  <input
                    placeholder="Activity"
                    onChange={(e) =>
                      setCardData({ ...cardData, title: e.target.value })
                    }
                    type="text"
                    value={cardData.title}
                    className="w-fit text-[18px] text-white"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <div className="flex flex-col items-start w-full">
                    <label
                      className="text-[15px] text-[#BBC0FF] mb-1"
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
                      Last Week
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
                        className="text-[15px] text-[#BBC0FF] bg-[#1C204B] border-b border-[#BBC0FF] w-16 mr-2"
                        value={cardData.previous}
                      />
                      <span className="text-[15px] text-[#BBC0FF]">hrs</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="border-2 p-2  rounded-2xl text-[15px] text-[#BBC0FF]"
                    onClick={() => setEdit(false)}
                  >
                    Save
                  </button>
                  <button
                    className="border-2 p-2  rounded-2xl text-[15px] text-[#BBC0FF]"
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
          </>
        </>
      )}
    </div>
  );
};
