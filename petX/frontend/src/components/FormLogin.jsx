import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Link } from "react-router";

const schema = yup
    .object({
        email: yup.string().email("Must be a valid email").required("Must be a valid email"),
        password: yup.string().required("Password is required"),
    })
    .required()

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)

    return (
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
                    <Link className="absolute top-0 right-0 text-principal" to="/forgot-password">Forgot Password?</Link>
                </label>
                <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Login</button>
            </form>
            <p className="text-gray-700 text-base/8">Don't have an account?</p>
            <Link className="text-principal underline" to="/register">Sign Up Now</Link>
        </div>
    )
}