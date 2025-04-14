import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Must be a valid email").required("Must be a valid email"),
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    })
    .required()

export const FormRegister = ({ signUpLink }) => {
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
            <h2 className="text-2xl font-semibold pb-8">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
                <label htmlFor="name" className="flex flex-col font-semibold text-md pb-8 relative">Name
                    <input type="text" {...register("name")} placeholder="Name" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500 text-sm">{errors.name?.message}</span>
                </label>
                <label htmlFor="email" className="flex flex-col font-semibold text-md pb-8 relative">Email
                    <input type="text" {...register("email")} placeholder="Email@email.com" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500 text-sm">{errors.email?.message}</span>
                </label>
                <label htmlFor="username" className="flex flex-col font-semibold text-md pb-8 relative">Username
                    <input type="text" {...register("username")} placeholder="@billbulldog" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500 text-sm">{errors.username?.message}</span>
                </label>
                <label htmlFor="password" className="flex flex-col font-semibold text-md pb-10 relative">Password
                    <input type="password" {...register("password")} placeholder="Password" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-5.5 left-0 text-gray-500 text-sm">At least one Uppercase letter and one number</span>
                    <span className="absolute bottom-1 left-0 text-red-500 text-sm">{errors.password?.message}</span>
                </label>
                <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Login</button>
            </form>
            <p className="text-gray-700 text-base/8">Have an account?</p>
            <a href={signUpLink} className="text-principal underline">Sign In Now</a>
        </div>
    )
}