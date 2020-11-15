import React from "react";

const classes = require("./CircleButton.module.css");

interface IProps {
  text: string;
  clickHandler: () => void;
}
const CircleButton = (props: IProps) => {
  const { text, clickHandler } = props;
  return (
    <div
      className={classes.circleButtonContainer}
      onClick={() => clickHandler()}
    >
      {text}
    </div>
  );
};

export default CircleButton;
