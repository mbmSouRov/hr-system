import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../Images/ultimate hrm logo-05-02 2.png";
import bannerImg from "../Images/istockphoto-1321277096-612x612 1.png";
const Main = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(10);
  return (
    <div className="grid grid-cols-2 gap-20 items-center">
      <div>
        <img
          className="mb-10 cursor-pointer"
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img src={bannerImg} alt="" />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
