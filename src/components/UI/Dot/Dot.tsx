import React from "react";

const classes = require("./Dot.module.css");

interface IProps {
  text: string | number;
  isActive: boolean;
}
const Dot = (props: IProps) => {
  const { text, isActive } = props;
  return (
    <div className={isActive ? classes.activeDot : classes.dot}>{text}</div>
  );
};

export default Dot;
