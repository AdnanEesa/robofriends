import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{ overflowY: "scroll", border: "solid white", borderWidth: "1px  0px ", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
