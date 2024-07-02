// simple funct comp jsx version
import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Aqil</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Aqil!")
  );
};

export default Hello;
