import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="text-3xl mb-5">
        Current Theme: {theme}
      </h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;