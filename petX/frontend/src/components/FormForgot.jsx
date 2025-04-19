import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Link } from "react-router";

const schema = yup
    .object({
        email: yup.string().email("Must be a valid email").required("Must be a valid email")
    })
    .required()

export const FormForgot = () => {
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
            <h2 className="text-2xl font-semibold">Forgot Password?</h2>
            <p className="pb-8">Type in your email and we'll send you a link to reset your password</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
                <label htmlFor="email" className="flex flex-col font-semibold text-sm pb-8 relative">E-mail
                    <input type="text" {...register("email")} placeholder="E-mail" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500">{errors.email?.message}</span>
                </label>
                <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Send Reset Email</button>
            </form>
            <p className="text-gray-700 text-base/8">Already have an account?</p>
            <Link className="text-principal underline" to="/">Sign In</Link>
        </div>
    )
}