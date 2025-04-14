import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().email("Must be a valid email").required("Must be a valid email"),
        password: yup.string().required("Password is required"),
    })
    .required()

export const FormLogin = ({ signUpLink }) => {
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
                </label>
                <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Login</button>
            </form>
            <p className="text-gray-700 text-base/8">Don't have an account?</p>
            <a href={signUpLink} className="text-principal underline">Sign Up Now</a>
        </div>
    )
}