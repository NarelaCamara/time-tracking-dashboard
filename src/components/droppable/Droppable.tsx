import { DragOverlay } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type React from "react";

export const Droppable = ({
  renderChildren,
  id,
  activeId,
}: {
  renderChildren: React.ReactNode;
  id: string;
  activeId: string | null;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    touchAction: "none",
  } as React.CSSProperties;

  console.log("id", activeId);

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${isDragging ? "opacity-90 scale-105" : ""}`}
      >
        {renderChildren}
      </div>
      <DragOverlay
        dropAnimation={{
          duration: 500,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        {activeId ? renderChildren : null}
      </DragOverlay>
    </>
  );
};
