// styles
const styles = {
  fontSize: " 20px",
  marginRight: "2px",
  marginTop: "6px",
};

const grey = {
  color: "#858c9a",
};
const active = {
  color: "#ffffff",
};
const purple = {
  color: "#645ec6",
};
const margin = {
  marginRight: "10px",
  marginTop: "5px",
};
const font = {
  fontSize: " 18px",
};

// icons
export class PathIcons {
  static layoutFluid = (
    <i className="fi fi-rr-table-rows" style={{ ...styles, ...grey }}></i>
  );
  static layoutFluidActive = (
    <i className="fi fi-rr-table-rows" style={{ ...styles, ...active }}></i>
  );
  static layoutFluidNew = (
    <i className="fi fi-rr-table-rows" style={{ ...styles, ...purple }}></i>
  );
  static eyeSlash = (
    <i className="fi fi-rr-eye-crossed" style={{ ...grey, ...margin }}></i>
  );
  static eye = (
    <i className="fi fi-rr-eye" style={{ ...active, ...margin }}></i>
  );
  static menuDots = (
    <i
      className="fi fi-rs-menu-dots-vertical"
      style={{ ...active, ...margin, ...font }}
    ></i>
  );
  static close = (<i className="fi fi-br-cross" style={{ ...grey }}></i>);
}
