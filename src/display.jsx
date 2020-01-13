import React from "react";

const Display = props => {
  return (
    <td className={props.className} style={props.style} id="display" colspan="5">
      {props.number}
    </td>
  );
};

export default Display;
