import { Rutine, type RutineType } from "../../App";

type MenuProps = {
  rutine: RutineType;
  setRutine: (rutine: RutineType) => void;
};

export const Menu = ({ rutine, setRutine }: MenuProps) => {
  return (
    <div className="flex items-center justify-center  gap-6 bg-[#1C204B] rounded-b-2xl ">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 p-6 relative">
        <h3
          onClick={() => setRutine(Rutine.Daily)}
          className={`${
            rutine === Rutine.Daily ? "text-white" : " text-[#7078C9]"
          } text-[18px]`}
        >
          Daily
        </h3>
        <h3
          onClick={() => setRutine(Rutine.weekly)}
          className={`${
            rutine === Rutine.weekly ? "text-white" : " text-[#7078C9]"
          } text-[18px]`}
        >
          weekly
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
