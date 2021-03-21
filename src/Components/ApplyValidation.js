import React from "react";
import { useForm } from "react-hook-form";

export default function ApplyValidation() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} placeholder="First Name"/>
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} placeholder="Last Name"/>
      <input name="role" ref={register} placeholder="role"/>
      <input name="age" type="number" placeholder="age" ref={register({ min: 13, max: 99 })} />
      {errors.age && "must be at least 13 years old to register"}
      <input type="submit" />
    </form>
    </div>
  );
}