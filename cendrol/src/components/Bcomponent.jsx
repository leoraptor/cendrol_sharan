import React, { useState } from "react";
import "./b.css";

const Bcomponent = (props) => {
  //storing the prop in a state
  const [data, setData] = useState(props.num);

  // count increment function
  const increase = () => {
    setData(data + 10);
  };
  return (
    <div className="bcontainer" style={{ background: props.bg_color }}>
      <h2>{data}</h2>

      <button
        className="b-btn"
        style={{ background: props.bg_color }}
        onClick={increase}
      >
        click to increase counter
      </button>
    </div>
  );
};

export default Bcomponent;
