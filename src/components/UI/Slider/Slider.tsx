import React, { useState, useRef } from "react";

const classes = require("./Slider.module.css");

interface IProps {
  animationDuration: number;
  defaultSlide?: number;
  children: React.ReactElement[];
  renderPrev: (callback: () => void) => React.ReactElement;
  renderNext: (callback: () => void) => React.ReactElement;
  renderDot: (isActive: boolean, text: string | number) => React.ReactElement;
}

const Slider = (props: IProps) => {
  const [currentSlide, setCurrentslide] = useState(
    props.defaultSlide ? props.defaultSlide - 1 : 0
  );
  const intervalRef = useRef<number>();
  const numberOfSlides = props.children.length;

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentslide((index) => (index + 1) % numberOfSlides);
    }, props.animationDuration * 1000);
    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  const setNext = () => {
    clearInterval(intervalRef.current);
    setCurrentslide((index) => (index + 1) % numberOfSlides);
  };
  const setPrev = () => {
    clearInterval(intervalRef.current);
    setCurrentslide(
      currentSlide === 0 ? numberOfSlides - 1 : (index) => index - 1
    );
  };

  const renderContent = () => {
    return props.children.map((child: React.ReactElement, index: number) => {
      return (
        <div
          key={index}
          className={
            index === currentSlide ? classes.activeSlide : classes.slide
          }
        >
          {child}
        </div>
      );
    });
  };

  return (
    <div>
      <div className={classes.slides}>{renderContent()}</div>
      <div className={classes.sliderIndicator}>
        {props.children.map((elment: any, index: number) =>
          props.renderDot(index === currentSlide, index + 1)
        )}
      </div>
      <div className={classes.sliderNavigation}>
        {props.renderPrev(setPrev)}
        {props.renderNext(setNext)}
      </div>
    </div>
  );
};
export default Slider;
