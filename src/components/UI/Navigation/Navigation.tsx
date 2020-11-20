import React, {useContext} from 'react';
import SliderContext from '../Slider/SliderContext';

const classes = require('./Navigation.module.css');

interface IProps {
  renderPrev: (callback: () => void) => React.ReactElement;
  renderNext: (callback: () => void) => React.ReactElement;
}

const Navigation = (props: IProps) => {
  const [current,setIndex,setPrev,setNext] = useContext(SliderContext);
  return(<div className={classes.sliderNavigation}>
      {props.renderPrev(setPrev)}
      {props.renderNext(setNext)}
    </div>);
}

export default Navigation;
