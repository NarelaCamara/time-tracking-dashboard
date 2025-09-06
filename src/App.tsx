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
      <div className="h-screen flex flex-col lg:flex-row m-6 md:items-center lg:justify-center bg-[#0E1323] px-4 pt-16">
        <div className="flex flex-col relative md:w-[612px] lg:h-[520px] lg:w-[255px]">
          <div className="p-8 min-w-[327px] flex lg:flex-col items-start gap-2 bg-[#5747EA] rounded-2xl relative top-[10px] lg:h-full lg:p-8">
            <img
              src={jeremy}
              className="h-16 border-white border-3 rounded-full"
              alt="user profile"
            />
            <div className="flex flex-col items-start">
              <p className="text-[15px] text-white">Report for</p>
              <h2 className="text-2xl lg:text-[40px] text-white">
                Jeremy Robson
              </h2>
            </div>
          </div>

          <Menu />
        </div>

        <div className="grid  md:grid-cols-3  grid-rows-0 gap-4 md:w-[612px] lg:w-auto lg:max-w-[829px] lg:relative lg:-right-20">
          {cards.map((e) => (
            <Card key={e.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
