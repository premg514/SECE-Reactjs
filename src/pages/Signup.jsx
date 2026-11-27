import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const schema = z.object({
  email: z.string().min(1, "Email is required"),

  password: z.string().min(6, "Password must be at least 6 characters")
});


export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:zodResolver(schema)});


  function submit(data){
    console.log(data);
    
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        placeholder="username"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>

      <input
        placeholder="password"
        type="password"
        {...register("passsword")}
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
