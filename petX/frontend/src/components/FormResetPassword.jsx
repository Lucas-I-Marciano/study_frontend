import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useNavigate } from "react-router";

const schema = yup
    .object({
        newPassword: yup.string().required("Password is required"),
        repeatPassword: yup.string().oneOf([yup.ref("newPassword")], "Passwords must match")
    })
    .required()

export const FormResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        // All logic of reset Password
        console.log(data)
        navigate("/")
    }
    const navigate = useNavigate()

    return (
        <div className="form bg-white w-full px-5 pt-8 pb-16 font-[Open_Sans]">
            <h2 className="text-2xl font-semibold">Choose a new Password</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
                <label className="flex flex-col font-semibold text-sm pb-8 relative">Password
                    <input type="password" {...register("newPassword")} placeholder="New Password" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500">{errors.newPassword?.message}</span>
                </label>
                <label className="flex flex-col font-semibold text-sm pb-8 relative">Place your new Password again
                    <input type="password" {...register("repeatPassword")} placeholder="New Password" className="border border-gray-600 rounded-sm p-1.5" />
                    <span className="absolute bottom-3 left-0 text-red-500">{errors.repeatPassword?.message}</span>
                </label>
                <button type="submit" className="p-2 bg-principal rounded-sm text-white font-semibold">Save new password</button>
            </form>
        </div>
    )
}