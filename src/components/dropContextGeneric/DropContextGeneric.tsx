import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../droppable/Droppable";

type DropContextProps<T> = {
  cards: T[];
  renderCard: (card: T) => React.ReactNode;
};

export const DropContextGeneric = <T,>({
  cards,
  renderCard,
}: DropContextProps<T>) => {
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {cards.map((e) => {
        return <Droppable>{renderCard(e)}</Droppable>;
      })}
    </DndContext>
  );
};
