import React, { useState } from "react";
import "./a.css";
import Bcomponent from "./Bcomponent";

const Acomponent = () => {
  //This is the variable which i pass as prop to B component
  const cendol = 2;

  //seting color red if true and blue if false
  const [btncolor, setBtncolor] = useState(false);
  const [color, setcolor] = useState("");

  //changing color of the change color button and i pass it as prop to B component
  const changecolor = () => {
    setBtncolor(!btncolor);
    console.log(btncolor);
    if (btncolor) {
      setcolor("red");
    } else {
      setcolor("blue");
    }
  };

  return (
    <div className="acontainer">
      <div className="a_child_div">
        <Bcomponent num={cendol} bg_color={color} />
      </div>
      <button
        onClick={changecolor}
        className="btn"
        style={{ backgroundColor: color }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Acomponent;
