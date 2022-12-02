import React, { useState } from "react";
import LoginForm from "../../Components/LoginForm";
import SignupForm1 from "../../Components/SignupForm1";
import SignupForm2 from "../../Components/SignupForm2";
import SignupForm3 from "../../Components/SignupForm3";
const Homepage = ({ component }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [emailId, setEmailId] = useState(null);

  return (
    <div>
      {component === "login" && <LoginForm></LoginForm>}
      {component === "signupform1" && (
        <SignupForm1
          setFirstName={setFirstName}
          setLastName={setLastName}
        ></SignupForm1>
      )}
      {component === "signupform2" && (
        <SignupForm2
          setPhoneNumber={setPhoneNumber}
          setEmailId={setEmailId}
        ></SignupForm2>
      )}
      {component === "signupform3" && (
        <SignupForm3
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          emailId={emailId}
        ></SignupForm3>
      )}
    </div>
  );
};

export default Homepage;
