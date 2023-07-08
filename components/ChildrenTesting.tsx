"use client";
import React, { Children, ReactNode } from "react";

const ChildrenTesting = ({ children }: { children: ReactNode }) => {
  const childrens = Children.toArray(children);
  console.log("childrens:", children);
  return <div> {Children.map(childrens, (child) => child)}</div>;
};

export default ChildrenTesting;
