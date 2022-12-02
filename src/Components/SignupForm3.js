import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import toast from "react-hot-toast";

const SignupForm3 = ({ firstName, lastName, phoneNumber, emailId }) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data, e) => {
    const formInfo = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: emailId,
      password: data.password,
    };
    console.log(formInfo);

    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        navigate("/");
        toast.success("Account Created! Please LogIn");
      });
  };
  return (
    <section className="border shadow-lg shadow-slate-400 p-20 w-full rounded-xl">
      <form onSubmit={handleSubmit(handleLogin)}>
        <p className="text-xl text-center font-semibold mb-20">SignUp Form</p>
        <div className="form-control w-full max-w-lg my-20">
          <input
            type="password"
            placeholder="Write Password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must be 8 characters",
              },
            })}
            className="input border-0 border-b-2 w-full max-w-lg px-2 outline-0"
          />
          {errors.password && (
            <p className="text-slate-500">{errors.password?.message}</p>
          )}
        </div>
        <div className="flex items-center">
          <p className="text-slate-500 mt-5 text-sm font-semibold">
            <Link to={"/step-2"}>Back</Link>{" "}
          </p>
          <button
            className="submitBtn w-1/3 rounded-xl mt-5 font-semibold shadow-slate-400 shadow-lg mx-auto"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm3;
