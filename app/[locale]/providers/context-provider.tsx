"use client";
import React, { createContext, useState } from "react";

export type ContextValueType = {
  base: {
    appVisited: boolean;
  };
  updateBase: ({
    key,
    value,
  }: {
    key: string;
    value: string | number | boolean | undefined;
  }) => void;
};

export const AppContext = createContext<ContextValueType | null>(null);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [base, setBase] = useState({
    appVisited: false,
  });

  const updateBase = ({
    key,
    value,
  }: {
    key: string;
    value: string | number | boolean | undefined;
  }) => {
    setBase({
      ...base,
      [key]: value,
    });
  };

  const contextValue: ContextValueType = {
    base,
    updateBase,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default ContextProvider;
