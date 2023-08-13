import React from "react";
import "./dark_mode.css";
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").classList.add("dark-mode");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").classList.remove("dark-mode");
    localStorage.setItem("selectedTheme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  return (
    <>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </>
  );
};

export default DarkMode;
