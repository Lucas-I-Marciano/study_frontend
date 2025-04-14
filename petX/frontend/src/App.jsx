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
      <div className={`bg-black-100`}>
        <div>
          <img src={images.login_back} className="bg-black absolute -top-35 -z-2" alt="" />
          <div className="bg-black h-full w-full absolute opacity-60 -top-60 -z-1"></div>
        </div>
        <div className="px-5 pt-10 pb-5 font-[Open_Sans] text-4xl font-bold">
          <img src={images.login_paw} className="py-bottom-5" alt="" />
          <p className="text-white pt-10">Comece agora.</p>
          <p className="text-white">Conecte-se já.</p>
        </div>

      </div>
      <div className="form bg-white w-full px-5 pt-8 pb-16 font-[Open_Sans]">
        <h2 className="text-2xl font-semibold pb-8">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="email" className="flex flex-col font-semibold text-sm pb-8 relative">E-mail
            <input type="text" {...register("email")} placeholder="E-mail" className="border border-gray-600 rounded-sm py-1.5" />
            <span className="absolute bottom-4 left-0">{errors.email?.message}</span>
          </label>
          <label htmlFor="password" className="flex flex-col font-semibold text-sm pb-8 relative">Password
            <input type="password" {...register("password")} placeholder="Password" className="border border-gray-600 rounded-sm py-1.5" />
            <span className="absolute bottom-4 left-0">{errors.password?.message}</span>
          </label>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <p>Sign Up Now</p>
      </div>
      <div className="bg-white flex w-full items-center gap-5 justify-center">
        <img src={images.login_paw_footer} alt="" />
        <span className="text-principal font-bold text-xl font-[Poppins]">PETWITTER</span>
      </div>

    </>
  )
}

export default App
