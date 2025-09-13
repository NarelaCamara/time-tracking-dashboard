import { DragOverlay, useDraggable } from "@dnd-kit/core";
import type React from "react";

export const Droppable = ({
  renderChildren,
  id,
  isDragging,
}: {
  renderChildren: React.ReactNode;
  id: number;
  isDragging: boolean;
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div>
      <div ref={setNodeRef} {...listeners} {...attributes}>
        {renderChildren}
      </div>
      <DragOverlay
        wrapperElement="ul"
        dropAnimation={{
          duration: 500,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        {isDragging ? renderChildren : null}
      </DragOverlay>
    </div>
  );
};
