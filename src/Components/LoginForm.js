import React from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import AttendancePage from "./AttendancePage";
import "./style.css";
const LoginForm = ({ accs_token, setAccs_token }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const HandleLogin = (data, e) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };
    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccs_token(data.access_token);
        e.target.reset();
        navigate({
          pathname: "/attendancePage",
          search: createSearchParams({
            id: `${data.access_token}`,
          }).toString(),
        });
      });
  };

  return (
    <section className="border shadow-lg shadow-slate-400 p-10 lg:p-20 mx-5 lg:w-full rounded-xl">
      <form onSubmit={handleSubmit(HandleLogin)}>
        <p className="text-xl text-center font-semibold mb-20">Log In Form</p>
        <div className="form-control w-full max-w-lg my-10">
          <input
            type="text"
            placeholder="Write Email Address"
            {...register("email", {
              required: "Email Address is required",
            })}
            className="input border-0 border-b-2 w-full max-w-lg px-2 outline-0"
          />
          {errors.email && (
            <p className="text-slate-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs my-10">
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
            className="input border-0 border-b-2 w-full max-w-xs px-2 outline-0"
          />

          {errors.password && (
            <p className="text-slate-500">{errors.password?.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="submitBtn w-1/3 rounded-xl mt-5 font-semibold shadow-slate-400 shadow-lg"
            type="submit"
          >
            Log In
          </button>
        </div>
        <p className="mt-10 font-light text-sm">
          Don't Have An Account?{" "}
          <span className="text-blue-500 font-semibold uppercase hover:underline">
            <Link to={"/step-1"}>Signup Here</Link>
          </span>
        </p>
      </form>
      <div className="hidden">
        {accs_token && (
          <AttendancePage accs_token={accs_token}></AttendancePage>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
