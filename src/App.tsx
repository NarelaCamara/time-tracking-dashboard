import jeremy from "../src/assets/image-jeremy.png";
import { Profile } from "./components/profile/Profile";
import { Menu } from "./components/menu/Menu";
import { Card } from "./components/card/Card";
import { DropContextGeneric } from "./components/dropContextGeneric/DropContextGeneric";

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

  const renderCard = (e: { title: string }) => {
    return <Card key={e.title} title={e.title} />;
  };
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen mx-auto bg-[#0E1323] max-md:min-w-[320px] max-md:max-w-[450px] md:max-w-[650px] lg:max-w-[1200px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 w-full">
          <div className="lg:h-[520px] lg:col-span-1 sticky top-0 z-10">
            <Profile image={jeremy} />
            <Menu />
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
              <DropContextGeneric cards={cards} renderCard={renderCard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
