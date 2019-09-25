import React from "react";

export default function(props) {
  const { chosenNumbers } = props;

  return <div className="chosenNumbers">{chosenNumbers}</div>;
}
