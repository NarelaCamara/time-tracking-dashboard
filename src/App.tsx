import jeremy from "../src/assets/image-jeremy.png";

import { Card } from "./components/card/Card";
import { Menu } from "./components/menu/Menu";
import { Profile } from "./components/profile/Profile";

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
      <div className="bg-[#0E1323] max-md:min-w-[320px] max-md:max-w-[450px] lg:max-w-[1200px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 w-full">
          <div className="lg:h-[520px] lg:col-span-1 sticky top-0 z-10">
            <Profile image={jeremy} />
            <Menu />
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
              {cards.map((e) => (
                <Card key={e.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
