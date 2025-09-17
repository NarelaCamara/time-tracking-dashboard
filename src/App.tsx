import jeremy from "../src/assets/image-jeremy.png";
import { Profile } from "./components/profile/Profile";
import { Menu } from "./components/menu/Menu";
import { DropContextGeneric } from "./components/dropContextGeneric/DropContextGeneric";
import { CardLogic } from "./components/cardLogic/CardLogic";
import work from "./assets/icon-work.svg";
import study from "./assets/icon-study.svg";
import social from "./assets/icon-social.svg";
import self_care from "./assets/icon-self-care.svg";
import play from "./assets/icon-play.svg";
import excersice from "./assets/icon-exercise.svg";

function App() {
  const cards = [
    {
      title: "Excercise",
      current: 32,
      previous: 36,
      background: "bg-[#4BCF82]",
      image: excersice,
    },

    {
      title: "Play",
      current: 10,
      previous: 8,
      background: "bg-[#55C2E6]",
      image: play,
    },
    {
      title: "Self care",
      current: 32,
      previous: 36,
      background: "bg-[#F1C75B]",
      image: self_care,
    },
    {
      title: "Social",
      current: 10,
      previous: 8,
      background: "bg-[#7335D2]",
      image: social,
    },
    {
      title: "Study",
      current: 32,
      previous: 36,
      background: "bg-[#FF5E7D]",
      image: study,
    },

    {
      title: "Work",
      current: 32,
      previous: 36,
      background: "bg-[#FF8B64]",
      image: work,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCard = (e: any) => {
    return <CardLogic data={e} />;
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
              <DropContextGeneric
                genericArrayOfObj={cards}
                renderGenricComponent={renderCard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
