import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";

const SignupForm2 = ({ setPhoneNumber, setEmailId }) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data, e) => {
    e.target.reset();
    navigate("/step-3");
    setEmailId(data.email);
    setPhoneNumber(data.phoneNumber);
  };
  return (
    <section className="border shadow-lg shadow-slate-400 p-10 lg:p-20 mx-5 lg:w-full rounded-xl">
      <form onSubmit={handleSubmit(handleLogin)}>
        <p className="text-xl text-center font-semibold mb-20">SignUp Form</p>
        <div className="form-control w-full max-w-lg my-10">
          <input
            type="phoneNumber"
            placeholder="+8801xxxxxxxxx"
            {...register("phoneNumber", {
              required: "Phone Number required",
            })}
            className="input border-0 border-b-2 w-full max-w-lg px-2 outline-0"
          />
          {errors.phoneNumber && (
            <p className="text-slate-500">{errors.phoneNumber?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs my-10">
          <input
            type="Email"
            placeholder="Write Email Address"
            {...register("email", {
              required: "Email Address required",
            })}
            className="input border-0 border-b-2 w-full max-w-xs px-2 outline-0"
          />

          {errors.email && (
            <p className="text-slate-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="flex items-center">
          <p className="text-slate-500 mt-5 text-sm font-semibold">
            <Link to={"/step-1"}>Back</Link>{" "}
          </p>
          <button
            className="submitBtn w-1/3 rounded-xl mt-5 font-semibold shadow-slate-400 shadow-lg mx-auto"
            type="submit"
          >
            Next Step <FaArrowRight className="inline"></FaArrowRight>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm2;
