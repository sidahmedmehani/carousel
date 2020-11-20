import React from 'react';

interface IProps {
  children : React.ReactElement
}

const SliderNavigation = (props :IProps) => {
  return(<div>
    {props.children}
  </div>)
}

export default SliderNavigation;
