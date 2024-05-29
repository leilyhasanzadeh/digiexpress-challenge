// libraries
import { createContext, useContext, useState } from "react";

// context
const DropdownContext = createContext();

export const useDropdownContext = () => useContext(DropdownContext);

export const DropdownProvider = ({ children }) => {
  // states
  const [value, setValue] = useState({});

  // renderer
  return (
    <DropdownContext.Provider value={{ value, setValue }}>
      {children}
    </DropdownContext.Provider>
  );
};
