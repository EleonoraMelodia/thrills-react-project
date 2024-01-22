import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type InputContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput, clicked, setClicked , category, setCategory}}>
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
