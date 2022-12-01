import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../Images/ultimate hrm logo-05-02 2.png";
import bannerImg from "../Images/istockphoto-1321277096-612x612 1.png";
const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-20 items-center">
      <div>
        <img className="mb-10" src={logo} alt="" />
        <img src={bannerImg} alt="" />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
