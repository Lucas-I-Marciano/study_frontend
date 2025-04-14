import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required(),
    password: yup.string().required("Password is required"),
  })
  .required()

import images from "./assets"
import { Header } from "./components/Header"

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Header login_back={images.login_back} icon={images.login_paw} />
      <div className="form bg-white w-full px-5 pt-8 pb-16 font-[Open_Sans]">
        <h2 className="text-2xl font-semibold pb-8">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
          <label htmlFor="email" className="flex flex-col font-semibold text-sm pb-8 relative">E-mail
            <input type="text" {...register("email")} placeholder="E-mail" className="border border-gray-600 rounded-sm p-1.5" />
            <span className="absolute bottom-3 left-0 text-red-500">{errors.email?.message}</span>
          </label>
          <label htmlFor="password" className="flex flex-col font-semibold text-sm pb-8 relative">Password
            <input type="password" {...register("password")} placeholder="Password" className="border border-gray-600 rounded-sm p-1.5" />
            <span className="absolute bottom-3 left-0 text-red-500">{errors.password?.message}</span>
          </label>
          <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Login</button>
        </form>
        <p className="text-gray-700 text-base/8">Don't have an account?</p>
        <a href="#" className="text-principal underline">Sign Up Now</a>
      </div>
      <div className="bg-white flex w-full items-center gap-5 justify-center pb-8">
        <img src={images.login_paw_footer} alt="" />
        <span className="text-principal font-bold text-xl font-[Poppins]">PETWITTER</span>
      </div>

    </>
  )
}

export default App
