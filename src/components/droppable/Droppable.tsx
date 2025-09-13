import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type React from "react";

export const Droppable = ({
  renderChildren,
  id,
}: {
  renderChildren: React.ReactNode;
  id: string;
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${isDragging ? "opacity-90 scale-105" : ""}`}
    >
      {renderChildren}
    </div>
  );
};
