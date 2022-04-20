import { createContext, useContext, useState } from "react";

import { COLORS } from "../data/colors";

const ColorContext = createContext("");

const useColorContext = () => useContext(ColorContext);

const ColorContextProvider = ({ children }) => {
  const randomIndex = Math.floor(Math.random() * (COLORS.length - 1) - 0 + 0);
  const randomColor = COLORS[randomIndex];

  const [cardColor, setCardColor] = useState("");
  return (
    <ColorContext.Provider value={{ cardColor, setCardColor, randomColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContextProvider, useColorContext };
