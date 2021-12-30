import React from "react";
import { useForm } from "react-hook-form";
import ecommerceApi from "../api/ecommerceApi";

export default function Registration() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = async (data) => {
    const { email, name, password } = data;
    const requestData = {
      email,
      username: name,
      password,
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    };
    const response = await ecommerceApi.post("/users", requestData);
    reset();
  };
  const yourPasswordRule = register("password", {
    required: {
      value: true,
      message: "You must provide a password",
    },
    minLength: {
      value: 8,
      message: "Minimum 8 characters required",
    },
  });
  yourPasswordRule.current = watch("password", "");
  console.log(yourPasswordRule);

  return (
    <div className="ui container center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register Now</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Your name</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Enter your name",
              })}
            />
            <p style={{ marginTop: "5px", color: "red" }}>
              {errors.name?.message}
            </p>
          </div>
          <div className="field">
            <label>Your email</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter your email",
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                  message:
                    "Wrong or Invalid email address. Please correct and try again.",
                },
              })}
            />
            <p style={{ marginTop: "5px", color: "red" }}>
              {errors.email?.message}
            </p>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="password" {...yourPasswordRule} />
            <p style={{ marginTop: "5px", color: "red" }}>
              {errors.password?.message}
            </p>
          </div>
          <div className="field">
            <label>Password again</label>
            <input
              type="text"
              name="password_confirmation"
              {...register("password_confirmation", {
                validate: (value) =>
                  value === yourPasswordRule.current ||
                  "Passwords do not match",
              })}
            />
            <p style={{ marginTop: "5px", color: "red" }}>
              {errors.password_confirmation?.message}
            </p>
          </div>
          <button className="fluid ui button blue">Continue</button>
        </div>
      </form>
    </div>
  );
}
