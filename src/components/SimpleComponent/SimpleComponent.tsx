import React from "react";

const classes = require("./SimpleComponent.module.css");

const SimpleComponent = () => {
  return (
    <div className={classes.content}>
      <div>
        <p>“Success is like happiness: it multiplies when we share it.”</p>
        ALEXANDER COTTE, CEO LIVINGPACKETS
      </div>
    </div>
  );
};

export default SimpleComponent;
