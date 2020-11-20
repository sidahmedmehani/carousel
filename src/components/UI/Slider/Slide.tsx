import React from 'react';

interface IProps {
  children : React.ReactElement
}

const Slide = (props : IProps) => (<div>{props.children}</div>);

export default Slide;
