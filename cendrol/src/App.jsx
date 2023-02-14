import Acomponent from "./components/Acomponent";
import React from "react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Acomponent />
    </div>
  );
};

export default App;
