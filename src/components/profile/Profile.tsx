export const Profile = ({ image }: { image: string }) => {
  return (
    <div className="p-8 min-w-[227px] flex lg:flex-col items-start gap-2 bg-[#5747EA] rounded-2xl relative top-[10px] lg:p-8 md:w-[612px] lg:h-[520px] lg:w-[255px]">
      <img
        src={image}
        className="h-16 border-white border-3 rounded-full"
        alt="user profile"
      />
      <div className="flex flex-col items-start">
        <p className="text-[15px] text-white">Report for</p>
        <h2 className="text-2xl lg:text-[40px] text-white">Jeremy Robson</h2>
      </div>
    </div>
  );
};
