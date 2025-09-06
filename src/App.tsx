import jeremy from "../src/assets/image-jeremy.png";

import { Card } from "./components/card/Card";
import { Menu } from "./components/menu/Menu";

function App() {
  const cards = [
    {
      title: "Work",
      current: 32,
      previous: 36,
    },
    {
      title: "Play",
      current: 10,
    },
    {
      title: "Work",
      current: 32,
      previous: 36,
    },
    {
      title: "Play",
      current: 10,
    },
  ];
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row gap-8 bg-[#0E1323] px-4 py-16">
        <div className="flex flex-col relative ">
          <div className="p-8 min-w-[327px] flex items-center gap-4 bg-[#5747EA] rounded-2xl relative top-[20px] ">
            <img
              src={jeremy}
              className="h-16 border-white border-3 rounded-full"
              alt="user profile"
            />
            <div className="flex flex-col items-start">
              <p className="text-[15px] text-white">Report for</p>
              <h2 className="text-2xl text-white">Jeremy Robson</h2>
            </div>
          </div>
          <div className="">
            <Menu />
          </div>
        </div>
        <div>
          {cards.map((e) => (
            <Card key={e.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
