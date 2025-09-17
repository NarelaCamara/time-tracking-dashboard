import { useState } from "react";
import { Card } from "../card/Card";
import { EditCard } from "../editCard/EditCard";
import type { RutineType } from "../../App";

export const CardLogic = ({
  data,
  rutine,
}: {
  data: {
    title: string;
    current: number;
    previous: number;
    image: string;
    background: string;
  };
  rutine: RutineType;
}) => {
  const [edit, setEdit] = useState(false);

  const handleEditCard = () => {
    setEdit(true);
  };

  return (
    <div>
      <Card data={data} handleEditCard={handleEditCard} rutine={rutine} />
      {edit && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <EditCard data={data} setEdit={setEdit} rutine={rutine} />
        </>
      )}
    </div>
  );
};
