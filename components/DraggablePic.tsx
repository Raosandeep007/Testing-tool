import classNames from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import { DragPreviewImage } from "react-dnd";

const DND = () => {
  return <div>DIV</div>;
};

export const DraggablePic = ({ url, id }: { url: string; id: number }) => {
  const [{ isDragging, ab }, drag, dragPreview] = useDrag(() => ({
    type: "image",
    item: { id, url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      ab: monitor.getInitialSourceClientOffset(),
    }),
  }));
  console.log({ ...ab });

  return (
    <>
      <DragPreviewImage
        src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        connect={dragPreview}
      />
      {/* <div ref={dragPreview} className="t-flex t-justify-center">
        <>Drag</>
      </div> */}

      <img
        ref={drag}
        src={url}
        className={classNames("t-h-40 t-w-40 t-box-border", {
          "t-border-2 t-border-solid t-border-teal-600 t-rounded-lg":
            isDragging,
        })}
        draggable
      />
    </>
  );
};
