import React from "react";
import Slider from "./components/UI/Slider/Slider";
import Slide from "./components/UI/Slider/Slide";
import SliderNavigation from "./components/UI/Slider/SliderNavigation";
import SimpleComponent from "./components/SimpleComponent/SimpleComponent";
import CircleButton from "./components/UI/CircleButton/CircleButton";
import Dot from "./components/UI/Dot/Dot";
import Navigation from "./components/UI/Navigation/Navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider
        animationDuration={5}
        renderDot={(isActive: boolean, text: string | number) => {
          return <Dot isActive={isActive} text={text} key={text} />;
        }}
      >
        <SliderNavigation>
          <Navigation
            renderPrev={(callback) => {
              return (
                <CircleButton clickHandler={() => callback()} text="Prev" />
              );
            }}
            renderNext={(callback) => {
              return (
                <CircleButton clickHandler={() => callback()} text="Next" />
              );
            }}
          />
        </SliderNavigation>
        <Slide>
          <div className="content">
            We are going to change the way you receive and return packages
          </div>
        </Slide>
        <Slide>
          <div className="content"> THE BOX is packaging reinvented </div>
        </Slide>
        <Slide>
          <div className="content">
            We make your shipping experience more comfortable and hassle free
          </div>
        </Slide>
        <Slide>
          <div className="content">
            Packaging must be reusable or recyclable by 2030.
          </div>
        </Slide>
        <Slide>
          <SimpleComponent />
        </Slide>
      </Slider>
    </div>
  );
}

export default App;
