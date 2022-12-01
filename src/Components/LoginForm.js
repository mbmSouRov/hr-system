import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
const LoginForm = () => {
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
        <p className="text-xl text-center font-semibold mb-20">Log In Form</p>
        <div className="form-control w-full max-w-lg">
          <input
            type="text"
            placeholder="Write Email Address"
            {...register("email", {
              required: "Email Address is required",
            })}
            className="input border-0 border-b-2 w-full max-w-lg my-2 px-2 outline-0"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Write Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be 8 characters",
              },
            })}
            className="input border-0 border-b-2 w-full max-w-xs my-2 px-2 outline-0"
          />

          {errors.password && (
            <p className="text-slate-500">{errors.password?.message}</p>
          )}
        </div>
        <input
          className="submitBtn rounded-xl mt-5 mx-20"
          value="Log In"
          type="submit"
        />
        <p className="mt-10 font-light text-sm">
          Don't Have An Account?{" "}
          <span className="text-blue-500 font-semibold uppercase hover:underline">
            <Link to={"/step-1"}>Signup Here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
