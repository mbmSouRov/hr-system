import React from "react";
import { useForm } from "react-hook-form";

const SignupForm1 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <section className="border">
      <p className="text-xl text-center font-semibold mb-10">Signup Form</p>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Write Email Address</span>
          </label>
          <input
            type="text"
            {...register("email", {
              required: "Email Address is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Write Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />

          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
        </div>
        <input
          className="btn btn-accent w-full rounded-xl"
          value="Log In"
          type="submit"
        />
        <p>
          Don't Have An Account?{" "}
          <span className="text-blue-500 font-semibold">Signup Here</span>
        </p>
      </form>
    </section>
  );
};

export default SignupForm1;
