import { useState } from "react";
import { Card } from "../card/Card";
import { EditCard } from "../editCard/EditCard";

export const CardLogic = ({
  data,
}: {
  data: {
    title: string;
    current: number;
    previous: number;
  };
}) => {
  const [edit, setEdit] = useState(false);

  const handleEditCard = () => {
    setEdit(true);
  };

  return (
    <div>
      <Card data={data} handleEditCard={handleEditCard} />
      {edit && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <EditCard data={data} setEdit={setEdit} />
        </>
      )}
    </div>
  );
};
