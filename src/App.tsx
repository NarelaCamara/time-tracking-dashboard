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
  ];
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row m-6 md:items-center lg:justify-center bg-[#0E1323] px-4 pt-16">
        <div className="flex flex-col relative md:w-[612px] lg:h-[520px] lg:w-[255px]">
          <Profile image={jeremy} />
          <Menu />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((e) => (
            <Card key={e.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
