import React from "react";
import "./columns.css";
import CardTask from "../cards/CardTask";
const Columns = (props) => {
  // console.log(props.data.tasks);
  return (
    <div className="container-columns col-lg-3">
      <div className="d-flex align-items-center gap-2">
        <span
          className="dots"
          style={{ backgroundColor: Dots(props.title.toLowerCase()) }}
        ></span>
        <span className="title-column">{props.title.toUpperCase()}</span>
      </div>

      {props.data.tasks.map((element, index) => (
        <CardTask key={index} data={element} />
      ))}
    </div>
  );
};

export default Columns;

// Color Dots
const Dots = (status) => {
  switch (status) {
    case "todo":
      return "#44c0e4";
    case "doing":
      return "#8b77fc";
    case "done":
      return "#65dead";

    default:
      return generateRandomColor();
  }
};

// Generate Color
function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
