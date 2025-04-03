import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { login } from "../services/auth";
import * as yup from "yup"

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("You must register with an valid email"),
  password: yup.string().required("You must enter a password"),
}).required()

export const FormTwo = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });


  const onSubmit = async (data) => {
    const response = await login(
      {
        "email": data.email,
        "password": data.password
      }
    )
    console.log(response)
  }
  console.log(errors);


  // console.log("Email changed: ", watch("email")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className='bg-blue-100 p-10'>
      {/* register your input into the hook by invoking the "register" function */}
      <input className='border-1 border-solid m-2' placeholder='your_email@email.com' {...register("email", { required: true })} />
      {errors.email && <span>{errors.email.message}</span>}
      <br></br>
      {/* include validation with required or other standard HTML validation rules */}
      <input type='password' className='border-1 border-solid m-2' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>{errors.password.message}</span>}

      <br></br>
      <input className='bg-gray-500 text-white p-1 m-2' type="submit" />

      { /*console.log(errors) /* {exampleRequired : {message:"", type:"required"}} --> exampleRequired is field name*/}
    </form>
  );
}