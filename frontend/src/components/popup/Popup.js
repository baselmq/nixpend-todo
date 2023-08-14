import React from "react";
import "../../css/index.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-bg" onClick={() => props.setTrigger(false)}></div>
      <div className="popup-inner">
        <div>{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
