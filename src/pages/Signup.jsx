import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function submit(data){
    console.log(data);
    
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        placeholder="username"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
        })}
      />
      <p>{errors.email?.message}</p>

      <input
        placeholder="password"
        type="password"
        {...register("passsword", {
          valueAsNumber: true,
        })}
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
