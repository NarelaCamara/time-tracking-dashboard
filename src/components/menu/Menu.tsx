import { useState } from "react";

const Rutine = {
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
} as const;

type RutineType = (typeof Rutine)[keyof typeof Rutine];

export const Menu = () => {
  const [rutine, setRutine] = useState<RutineType>(Rutine.Monthly);
  return (
    <div className="pb-8 min-w-[327px]  flex items-center gap-4 bg-[#1C204B] rounded-2xl mb-8">
      <div className="grid grid-cols-3 gap-4 p-6 relative">
        <h3
          onClick={() => setRutine(Rutine.Daily)}
          className={`${
            rutine === Rutine.Daily ? "text-white" : " text-[#7078C9]"
          } text-[18px]`}
        >
          Daily
        </h3>
        <h3
          onClick={() => setRutine(Rutine.Weekly)}
          className={`${
            rutine === Rutine.Weekly ? "text-white" : " text-[#7078C9]"
          } text-[18px]`}
        >
          Weekly
        </h3>
        <h3
          onClick={() => setRutine(Rutine.Monthly)}
          className={`${
            rutine === Rutine.Monthly ? "text-white" : " text-[#7078C9]"
          } text-[18px]`}
        >
          Monthly
        </h3>
      </div>
    </div>
  );
};
