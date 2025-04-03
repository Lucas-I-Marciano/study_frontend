import { useForm } from "react-hook-form";
import { login } from "../services/auth";

export const FormTwo = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = async (data) => {
      const response = await login(
        {
          "email": data.email,
          "password": data.password
        }
      )
      console.log(response)
    }
  

  console.log("Email changed: ", watch("email")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className='bg-blue-100 p-10'>
      {/* register your input into the hook by invoking the "register" function */}
      <input className='border-1 border-solid m-2' placeholder='your_email@email.com' {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input type='password' className='border-1 border-solid m-2' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      <input className='bg-gray-500 text-white p-1 m-2' type="submit" />

      { /*console.log(errors) /* {exampleRequired : {message:"", type:"required"}} --> exampleRequired is field name*/}
    </form>
  );
}