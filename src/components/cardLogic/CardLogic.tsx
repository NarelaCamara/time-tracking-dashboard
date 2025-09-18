import { useState } from "react";
import { Card } from "../card/Card";
import { EditCard } from "../editCard/EditCard";
import { Rutine, type Activity, type RutineType, type Time } from "../../App";

export const Hours = {
  Daily: 24,
  weekly: 168,
  Monthly: 744,
} as const;

export const CardLogic = ({
  data,
  rutine,
  remainingTime,
  setRemainingTime,
  setActivities,
}: {
  data: Activity;
  rutine: RutineType;
  remainingTime: Time;
  setRemainingTime: (time: Time) => void;
  setActivities: (activity: Activity) => void;
}) => {
  const [edit, setEdit] = useState(false);

  const titleCase = (rutine: RutineType) => {
    return rutine === Rutine.Daily
      ? "Yesterday"
      : rutine === Rutine.weekly
      ? "Last Week"
      : "Last Month";
  };

  const rutineCase = (rutine: RutineType, data: Activity) => {
    return { ...data, ...data[rutine] };
  };

  const handleUpdateActivivy = (current: number, previous: number) => {
    const update_rutine_remainingTime = remainingTime[rutine];
    console.log("update_rutine_remainingTime", update_rutine_remainingTime);
    setRemainingTime({
      ...remainingTime,
      [rutine]: {
        current: update_rutine_remainingTime.current + current,
        previous: update_rutine_remainingTime.previous + previous,
      },
    });

     console.log("update_rutine_remainingTime 0", update_rutine_remainingTime);
    setActivities({ ...data, [rutine]: { current, previous } });
  };

  return (
    <div>
      <Card
        data={rutineCase(rutine, data)}
        handleEditCard={() => setEdit(true)}
        title={titleCase(rutine)}
      />
      {edit && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <EditCard
            hours={Hours[rutine]}
            remainingTime={remainingTime[rutine]}
            data={rutineCase(rutine, data)}
            title={titleCase(rutine)}
            setEdit={setEdit}
            setUpdateActivity={handleUpdateActivivy}
          />
        </>
      )}
    </div>
  );
};
