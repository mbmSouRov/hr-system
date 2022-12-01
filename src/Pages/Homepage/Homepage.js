import React, { useState } from "react";
import LoginForm from "../../Components/LoginForm";
import SignupForm1 from "../../Components/SignupForm1";
import SignupForm2 from "../../Components/SignupForm2";
import SignupForm3 from "../../Components/SignupForm3";
const Homepage = ({ component }) => {
  const [formData, setFormData] = useState(10);
  return (
    <div>
      {component === "login" && <LoginForm formData={formData}></LoginForm>}
      {component === "signupform1" && (
        <SignupForm1 formData={formData}></SignupForm1>
      )}
      {component === "signupform2" && (
        <SignupForm2 formData={formData}></SignupForm2>
      )}
      {component === "signupform3" && (
        <SignupForm3 formData={formData}></SignupForm3>
      )}
    </div>
  );
};

export default Homepage;
