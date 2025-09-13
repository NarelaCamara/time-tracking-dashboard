/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  closestCenter,
  DndContext,
  DragOverlay,
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
    setActiveId(items.find((e) => e.id === event.active.id)?.item || null);
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
              renderChildren={renderGenricComponent(e.item)}
            />
          );
        })}
      </SortableContext>

      {/* 👇 Overlay centralizado */}
      <DragOverlay
        dropAnimation={{
          duration: 500,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        {activeId ? (
          <div className="p-4">{renderGenricComponent(activeId as any)}</div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
