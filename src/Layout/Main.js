import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../Images/ultimate hrm logo-05-02 2.png";
import bannerImg from "../Images/istockphoto-1321277096-612x612 1.png";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 items-center mb-10 lg:mb-0">
      <div className="mt-80 lg:mt-0">
        <img
          className=""
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img className="" src={bannerImg} alt="" />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
