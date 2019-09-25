import React from "react";

export default function(props) {
  const { result, chances } = props;

  return (
    <div className="header">
      <div className="appName">Play Nine</div>
      <div className="result">{result}</div>
      <div className="chances">
        Chances:
        <span className="chancesNumber">{chances}</span>
      </div>
    </div>
  );
}
