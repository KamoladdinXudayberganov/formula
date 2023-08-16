import React from "react";
import "./Main.css";
import notification from "../image/notification.png";
import boy from '../image/person.png'
import boys from '../image/profile.png'
import Menu from "../components/Menu/Menu";
import Main_center from "../components/main_center/Main_center";
import Main__center__footer__img from "../components/main__center__footer__img/Main__center__footer__img";

const Main = () => {
  return (
    <div style={{width:'100%',backgroundColor:'#F3FFF'}}>
      <nav className="navbar">
        <input className="nav__input__one" type="text" placeholder="Search for a race, car or racer" />
        <input type="text" placeholder="Choose a car" />
        <div className="icons">
          <img src={notification} alt="" />
          <img src={boy} alt="" />
          <img src={boys} alt="" />
        </div>
      </nav>
      <Menu/>
      <Main_center/>
      <Main__center__footer__img/>
    </div>
  );
};

export default Main;
