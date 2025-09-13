/* eslint-disable @typescript-eslint/no-explicit-any */
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../droppable/Droppable";
import { SortableContext } from "@dnd-kit/sortable";
import { useState } from "react";

type DropContextProps<T> = {
  genericArrayOfObj: T[];
  renderGenricComponent: (genericObj: T) => React.ReactNode;
};

export const DropContextGeneric = <T,>({
  genericArrayOfObj,
  renderGenricComponent,
}: DropContextProps<T>) => {
  let idCounter = 0;

  function generateId() {
    return ++idCounter; // Incremental ID generator
  }

  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext
        items={genericArrayOfObj.map((item: any) =>
          typeof item === "object" && item !== null && "id" in item
            ? (item as { id: string | number }).id
            : item
        )}
      >
        {genericArrayOfObj.map((e) => {
          return (
            <Droppable
              key={generateId()}
              id={generateId()}
              isDragging={isDragging}
              renderChildren={renderGenricComponent(e)}
            />
          );
        })}
      </SortableContext>
    </DndContext>
  );
};
