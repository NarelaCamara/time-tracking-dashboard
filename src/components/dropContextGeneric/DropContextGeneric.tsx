import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../droppable/Droppable";

type DropContextProps<T> = {
  genericArrayOfObj: T[];
  renderGenricComponent: (genericObj: T) => React.ReactNode;
};

export const DropContextGeneric = <T,>({
  genericArrayOfObj: cards,
  renderGenricComponent,
}: DropContextProps<T>) => {
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {cards.map((e) => {
        return <Droppable>{renderGenricComponent(e)}</Droppable>;
      })}
    </DndContext>
  );
};
