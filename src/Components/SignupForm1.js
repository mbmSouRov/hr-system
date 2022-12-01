import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";
const SignupForm1 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return (
    <section className="border shadow-lg shadow-slate-400 p-20 w-max rounded-xl">
      <form onSubmit={handleSubmit(handleLogin)}>
        <p className="text-xl text-center font-semibold mb-20">Signup Form</p>
        <div className="form-control w-full max-w-lg">
          <input
            type="text"
            placeholder="Write First Name"
            {...register("firstName", {
              required: "First Name is required",
            })}
            className="input border-0 border-b-2 w-full max-w-lg my-2 px-2 outline-0"
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Write Last Name"
            {...register("lastName", {
              required: "Last Name is required",
            })}
            className="input border-0 border-b-2 w-full max-w-xs my-2 px-2 outline-0"
          />

          {errors.lastName && (
            <p className="text-slate-500">{errors.lastName?.message}</p>
          )}
        </div>
        {/* <input /> */}
        <button
          className="submitBtn w-1/3 rounded-xl mt-5 ml-16"
          // value={"Next Step"}
          type="submit"
        >
          Next Step <FaArrowRight></FaArrowRight>
        </button>
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
