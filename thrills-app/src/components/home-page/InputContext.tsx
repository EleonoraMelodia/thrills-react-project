import React, { createContext, useContext, useState, ReactNode } from "react";

type InputContextType = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};
export const useInputContext = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error("useInputContext must be used within an InputProvider");
  }

  return context;
};