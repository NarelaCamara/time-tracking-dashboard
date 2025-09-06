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
  ];
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row gap-8 bg-[#0E1323]">
        <div className="p-8 min-w-[327px]  flex items-center gap-4 bg-[#5747EA] rounded-2xl mb-8">
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
        <Menu />
      </div>

      <div>
        {cards.map((e) => (
          <Card key={e.title} />
        ))}
      </div>
    </>
  );
}

export default App;
