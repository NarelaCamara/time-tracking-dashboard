import ellipsis from "../../assets/icon-ellipsis.svg";

export const Card = () => {
  return (
    <div className="p-8 min-w-[327px]  flex flex-col gap-4 bg-[#1C204B] rounded-2xl mb-8">
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] text-white">Work</h3>
        <img src={ellipsis} className="h-1" alt="ellipsise" />
      </div>
      <h2 className="text-[56px] text-white">32hrs</h2>
      <p className="text-[15px] text-[#BBC0FF]">Last Week - 36hrs</p>
    </div>
  );
};
