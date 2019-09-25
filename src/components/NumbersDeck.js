import React from "react";

export default function(props) {
  const { disabledNumbers } = props;

  return <div className="numbersDeck">{disabledNumbers}</div>;
}
