/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Droppable } from "../droppable/Droppable";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

type DropContextProps<T> = {
  genericArrayOfObj: T[];
  renderGenricComponent: (genericObj: T) => React.ReactNode;
};

export const DropContextGeneric = <T,>({
  genericArrayOfObj,
  renderGenricComponent,
}: DropContextProps<T>) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const [items, setItems] = useState(() => {
    let counter = 0;
    return genericArrayOfObj.map((item: any) => {
      return {
        id: String(counter++),
        item,
      };
    });
  });

  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over.id) {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          setItems(newItems);
        }
      }}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((e) => {
          return (
            <Droppable
              key={e.id}
              id={e.id}
              activeId={activeId}
              renderChildren={renderGenricComponent(e.item)}
            />
          );
        })}
      </SortableContext>
    </DndContext>
  );
};
