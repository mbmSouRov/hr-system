import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";
const SignupForm1 = ({ setFirstName, setLastName }) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data, e) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    e.target.reset();
    navigate("/step-2");
  };
  return (
    <section className="border shadow-lg shadow-slate-400 p-20 w-full rounded-xl">
      <form onSubmit={handleSubmit(handleLogin)}>
        <p className="text-xl text-center font-semibold mb-20">SignUp Form</p>
        <div className="form-control w-full max-w-lg my-10">
          <input
            type="text"
            placeholder="Write First Name"
            {...register("firstName", {
              required: "First Name is required",
            })}
            className="input border-0 border-b-2 w-full max-w-lg px-2 outline-0"
          />
          {errors.firstName && (
            <p className="text-slate-500">{errors.firstName?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs my-10">
          <input
            type="text"
            placeholder="Write Last Name"
            {...register("lastName", {
              required: "Last Name is required",
            })}
            className="input border-0 border-b-2 w-full max-w-xs px-2 outline-0"
          />

          {errors.lastName && (
            <p className="text-slate-500">{errors.lastName?.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="submitBtn w-1/3 rounded-xl mt-5 font-semibold shadow-slate-400 shadow-lg"
            type="submit"
          >
            Next Step <FaArrowRight className="inline"></FaArrowRight>
          </button>
        </div>
        <p className="mt-10 font-light text-sm">
          Already Have An Account?{" "}
          <span className="text-blue-500 font-semibold uppercase hover:underline">
            <Link to={"/"}>Login Here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default SignupForm1;
