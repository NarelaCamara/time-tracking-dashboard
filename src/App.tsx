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
import { useState } from "react";

/*** 

* **Daily (un día):** 24 horas
* **weekly (una semana):** 7 días × 24 horas = **168 horas**
* **Monthly (un mes promedio):** depende de la cantidad de días del mes:

  * 28 días → 672 horas
  * 30 días → 720 horas
  * 31 días → 744 horas
  * Si lo querés en promedio anual: 365 días ÷ 12 ≈ 30.44 días → **730.08 horas**
 */

export interface Activity {
  title: string;
  image: string;
  background: string;
  Daily: { current: number; previous: number };
  weekly: { current: number; previous: number };
  Monthly: { current: number; previous: number };
}

export const Rutine = {
  Daily: "Daily",
  weekly: "weekly",
  Monthly: "Monthly",
} as const;

export type RutineType = (typeof Rutine)[keyof typeof Rutine];

export interface Time {
  Daily: { current: number; previous: number };
  weekly: { current: number; previous: number };
  Monthly: { current: number; previous: number };
}

function App() {
  const Activities_Default = [
    {
      title: "Excercise",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },
      background: "bg-[#4BCF82]",
      image: excersice,
    },
    {
      title: "Play",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },

      background: "bg-[#55C2E6]",
      image: play,
    },
    {
      title: "Self care",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },

      background: "bg-[#F1C75B]",
      image: self_care,
    },
    {
      title: "Social",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },

      background: "bg-[#7335D2]",
      image: social,
    },
    {
      title: "Study",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },

      background: "bg-[#FF5E7D]",
      image: study,
    },

    {
      title: "Work",
      Daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      Monthly: {
        current: 0,
        previous: 0,
      },

      background: "bg-[#FF8B64]",
      image: work,
    },
  ];

  const RemainingTime_Default = {
    Daily: { previous: 0, current: 0 },
    weekly: { previous: 0, current: 0 },
    Monthly: { previous: 0, current: 0 },
  };

  const [rutine, setRutine] = useState<RutineType>(Rutine.Monthly);

  const [activities, setActivities] = useState(Activities_Default);

  const [remainingTime, setRemainingTime] = useState(RemainingTime_Default);

  const handleActivities = (updateActivity: Activity) => {
    const update_activities = activities.map((e) => {
      if (e.title === updateActivity.title) {
        return updateActivity;
      } else {
        return e;
      }
    });
     
    setActivities(update_activities);
  };

  const renderCard = (e: Activity) => {
    return (
      <CardLogic
        data={e}
        rutine={rutine}
        setRemainingTime={setRemainingTime}
        setActivities={handleActivities}
        remainingTime={remainingTime}
      />
    );
  };

  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen mx-auto bg-[#0E1323] max-md:min-w-[320px] max-md:max-w-[450px] md:max-w-[650px] lg:max-w-[1200px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 w-full">
          <div className="lg:h-[520px] lg:w-[255px] lg:col-span-1 sticky top-0 z-10">
            <Profile image={jeremy} />
            <Menu setRutine={setRutine} rutine={rutine} />
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-rows-1 md:grid-cols-3 gap-4 lg:relative lg:-top-9 lg:-left-32">
              <DropContextGeneric
                genericArrayOfObj={activities}
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
