import React, { useState } from "react";
import { DraggablePic } from "./DraggablePic";
import { useDrop } from "react-dnd";
import classNames from "classnames";

const pics = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/481686206/photo/boxing-power.jpg?s=1024x1024&w=is&k=20&c=oxeewaCbIfVUEFajRR8SCD52Cx63WkpwpBRxJkEgPJo=",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/140376185/photo/agressive-boxing-fight.jpg?s=1024x1024&w=is&k=20&c=i76dSMdYX43njO4aSpGLHZHSjzkUIHnmgQt8Zx77rSg=",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1310244372/photo/futuristic-boxing-ring.jpg?s=1024x1024&w=is&k=20&c=wHj7pPEDhjsywHUPleaxlh6czB0AetyBWb8NjzbwlYU=",
  },
];

export const DragAndDrop = () => {
  const [areaItem, setAreaItem] = useState<{ id: number; url: string }[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: { id: number; url: string }) =>
      setAreaItem((prev) => [...prev, item]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="t-flex t-gap-3 t-flex-col">
      <div className="t-border t-border-solid t-border-white t-rounded t-p-4 t-flex t-gap-4">
        {pics.map(({ id, url }) => (
          <DraggablePic key={id} url={url} id={id} />
        ))}
      </div>
      <div
        className={classNames(
          "t-border t-border-solid t-border-white t-rounded t-p-3 t-h-72 t-flex t-gap-4 t-w-[530px] t-overflow-auto t-flex-wrap",
          { "t-border-green-400": isOver }
        )}
        ref={drop}
      >
        {areaItem?.map(({ id, url }) => (
          <DraggablePic key={id} url={url} id={id} />
        ))}
      </div>
    </div>
  );
};
