import React, { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Theme from "./components/Theme";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`h-screen p-10 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}>
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;