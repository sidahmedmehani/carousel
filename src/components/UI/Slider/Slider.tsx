import React, { useState, useRef, useEffect } from "react";
import Slide from "./Slide";
import SliderNavigation from "./SliderNavigation";
import SliderContext from "./SliderContext";

const classes = require("./Slider.module.css");

interface IProps {
  animationDuration: number;
  children: React.ReactElement[];
  renderDot: (isActive: boolean, text: string | number) => React.ReactElement;
}

const Slider = (props: IProps) => {
  const [currentSlide, setCurrentslide] = useState(0);
  const intervalRef = useRef<number>();
  const numberOfSlides = props.children.filter(
    (child: React.ReactElement) => child.type === Slide
  ).length;

  useEffect(() => {
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

  const setIndex = (index: number) => {
    clearInterval(intervalRef.current);
    setCurrentslide(index);
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

  const renderInOrder = () => {
    const structure = props.children.reduce((acc: any, current: any) => {
      let key = current.type;
      if (!acc.has(key)) {
        acc.set(key, []);
      }
      acc.get(key).push(current);
      return acc;
    }, new Map());

    const allTypes = structure.keys();
    let content: React.ReactElement[] = [];
    let navContent: React.ReactElement[] = [];
    let slidesContent = null;
    for (const el of allTypes) {
      if (el === Slide) {
        slidesContent = structure
          .get(el)
          .map((element: React.ReactElement, index: number) => {
            return (
              <div
                key={index}
                className={
                  index === currentSlide ? classes.activeSlide : classes.slide
                }
              >
                {element}
              </div>
            );
          });
        slidesContent = <div className={classes.slides}> {slidesContent} </div>;
        content = [...content, slidesContent];
      }
      if (el === SliderNavigation) {
        navContent = structure
          .get(el)
          .map((element: React.ReactElement, index: number) => {
            return <div key={index}>{element}</div>;
          });
        content = [...content, ...navContent];
      }
    }

    return content;
  };

  return (
    <div>
      <SliderContext.Provider
        value={[currentSlide, setIndex, setPrev, setNext]}
      >
        {renderInOrder()}
        {
          <div className={classes.sliderIndicator}>
            {props.children
              .filter((child: React.ReactElement) => child.type === Slide)
              .map((elment: any, index: number) =>
                props.renderDot(index === currentSlide, index + 1)
              )}
          </div>
        }
      </SliderContext.Provider>
    </div>
  );
};
export default Slider;
