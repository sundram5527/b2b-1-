import React from "react";
import { useState,useEffect } from "react";



export default function ThemeToggle({ darkMode, setDarkMode }) {
//    const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
 
 
    return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-lg w-15  bg-gray-200 px-4 py-2 dark:bg-gray-700 dark:text-white"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}