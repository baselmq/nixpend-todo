import React from "react";
import { Link } from "react-router-dom";
import { PathIcons } from "../../util/PathIcons";

// button inside sidebar
const ItemSide = ({ text, active, to }) => {
  return (
    <li className={active ? "item active-item" : "item"}>
      <Link to={to} className="d-flex align-items-center gap-3">
        {active ? PathIcons.layoutFluidActive : PathIcons.layoutFluid}
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default ItemSide;
