import React from "react";

const Display = props => {
  return (
    <td className={props.className} style={props.style} colspan="5">
      {props.number}
    </td>
  );
};

export default Display;
