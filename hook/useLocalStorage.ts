"use client";
import { useEffect, useState } from "react";

export const useLocalStorage = (
  key: string,
  initialValue: any
): [any, (data: any) => void, () => void] => {
  const [localData, setLocalData] = useState<any>(initialValue);

  useEffect(() => {
    const data = localStorage.getItem(key);
    try {
      setLocalData(JSON.parse(data || ""));
    } catch (error) {
      setLocalData(initialValue);
    }
  }, [key]);

  const setItem = (data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
    setLocalData(data);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setLocalData(initialValue);
  };

  return [localData, setItem, removeItem];
};
