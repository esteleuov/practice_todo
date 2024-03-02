import React from "react";
import "./Header_title.css";
import Part from "../../Components/Part/Part.jsx";

function Header_title() {
  return (
    <>
      <header>
        <h1>TO DO ПРОЕКТ</h1>
        <img src="top_line.png" alt="Линия" />
      </header>
      <Part />
    </>
  );
}

export default Header_title;
