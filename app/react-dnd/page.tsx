"use client";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DragAndDrop } from "@/components/DragAndDrop";

const page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="t-h-screen t-flex t-justify-center t-items-center t-p-6">
        <DragAndDrop />
      </div>
      ;
    </DndProvider>
  );
};

export default page;
