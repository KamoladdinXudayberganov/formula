import React from "react";
import "./Main_center.css";
import car from '../../image/Car.png'
import image1 from '../../image/feature - 1.png'
import image2 from '../../image/feature - 2.png'
import image3 from '../../image/feature - 2 (1).png'


const Main_center = () => {
  return (
    <div className="main__center">
      <div className="main__center__img">
        <h1>Infiniti Renault <sup>TM</sup></h1>
        <img src={car}/>
      </div>
      <div className="main__center__catigoria">
          <div className="box1">
            <img src={image1} alt="" />
            <p></p>
          </div>
          <div className="box1">
            <img src={image2} alt="" />
            <p></p>
          </div>
          <div className="box1">
            <img src={image3} alt="" />
            <p></p>
          </div>
      </div>
    </div>
  );
};

export default Main_center;
