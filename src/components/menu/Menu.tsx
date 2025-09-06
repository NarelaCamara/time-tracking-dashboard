export const Menu = () => {
  return (
    <div className="pb-8 min-w-[327px]  flex items-center gap-4 bg-[#1C204B] rounded-2xl mb-8">
      <div className="grid grid-cols-3 gap-4 p-6 relative">
        <h3 className="text-[#7078C9] text-[18px]">Daily</h3>
        <h3 className="text-[#7078C9] text-[18px]">Weekly</h3>
        <h3 className="text-white text-[18px]">Monthly</h3>
      </div>
    </div>
  );
};
