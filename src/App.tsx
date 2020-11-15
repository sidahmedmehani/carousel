import React from "react";
import Slider from "./components/UI/Slider/Slider";
import SimpleComponent from "./components/SimpleComponent/SimpleComponent";
import CircleButton from "./components/UI/CircleButton/CircleButton";
import Dot from "./components/UI/Dot/Dot";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider
        animationDuration={5}
        defaultSlide={2}
        renderPrev={(callback) => {
          return <CircleButton clickHandler={() => callback()} text="Prev" />;
        }}
        renderNext={(callback) => {
          return <CircleButton clickHandler={() => callback()} text="Next" />;
        }}
        renderDot={(isActive: boolean, text: string | number) => {
          return <Dot isActive={isActive} text={text} key={text} />;
        }}
      >
        <div className="content">
          We are going to change the way you receive and return packages
        </div>
        <div className="content"> THE BOX is packaging reinvented </div>
        <div className="content">
          We make your shipping experience more comfortable and hassle free
        </div>
        <div className="content">
          Packaging must be reusable or recyclable by 2030.
        </div>
        <SimpleComponent />
      </Slider>
    </div>
  );
}

export default App;
