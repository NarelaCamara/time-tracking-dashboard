import { useState } from "react";
import { Card } from "../card/Card";

export const CardLogic = ({
  data,
}: {
  data: {
    title: string;
    current: number;
    previous: number;
  };
}) => {
  const [cardData, setCardData] = useState(data);
  const [edit, setEdit] = useState(false);

  const handleEditCard = () => {};

  return (
    <div>
      <Card data={cardData} handleEditCard={handleEditCard} />
      {edit && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8  rounded-lg shadow-lg">
          <h2>Edit Card</h2>
          <div>
            input for title:
            <input
              onChange={(e) =>
                setCardData({ ...cardData, title: e.target.value })
              }
              type="text"
            />
            <button onClick={() => setEdit(false)}>Save</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};
