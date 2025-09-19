import React, { useState, useRef } from "react";
import ellipsis from "../../assets/icon-ellipsis.svg";

interface Activity {
  title: string;
  current: number;
  previous: number;
  image: string;
  background: string;
}
interface CardProps {
  data: Activity;
  handleEditCard: (data: Activity) => void;
  title: string;
}

export const Card: React.FC<CardProps> = ({ data, handleEditCard, title }) => {
  const [showEdit, setShowEdit] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowEdit(false);
    }
  };

  return (
    <div
      className="relative flex flex-col my-12 lg:ml-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
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
        <div className="flex justify-between items-center relative">
          <h3 className="text-[18px] text-white">{data.title}</h3>
          <button
            className="pl-8 py-3"
            ref={buttonRef}
            onClick={() => setShowEdit((prev) => !prev)}
          >
            <img src={ellipsis} className="h-1" alt="ellipsis" />
          </button>

          {showEdit && (
            <>
              {/* 🔹 Overlay que ocupa toda la pantalla */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowEdit(false)}
              />

              {/* 🔹 Menú Edit */}
              <div className="absolute top-12 right-4 bg-[#1C204B] rounded-lg shadow-lg border border-[#373f92] z-20">
                <button
                  onClick={() => {
                    handleEditCard(data);
                    setShowEdit(false); // cerrar después de clickear Edit
                  }}
                  className="font-semibold px-6 py-2 rounded-xl border-2 border-[#23265A] shadow-lg bg-[#1C204B] text-white transition-colors duration-200"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-row md:flex-col justify-between lg:justify-start items-center lg:items-start">
          <h2 className="md:text-[56px] text-[32px] text-white">
            {data.current}hrs
          </h2>
          <p className="text-[15px] text-[#BBC0FF]">
            {title} - {data.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};
