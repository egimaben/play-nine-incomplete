import React from "react";

function Star() {
  return <div className="star" />;
}

export default function(props) {
  const { starsNumber } = props;

  const Stars = [];
  for (let i = 0; i < starsNumber; i++) {
    Stars.push(<Star />);
  }

  return <div className="stars">{Stars}</div>;
}
