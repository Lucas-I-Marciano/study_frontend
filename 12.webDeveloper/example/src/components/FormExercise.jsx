import * as yup from "yup"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { createPost } from "../services/posts"

const schemaPost = yup.object({
    title: yup.string().min(3, "Title must be bigger than 3 Characters").required(),
    body: yup.string().min(30, "Your post must be bigger than 30 Characters").required()
}).required()



export const FormExercise = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaPost) })
    const onSubmit = async (data) => {
        const response = await createPost(data)
        console.log("No Form")
        console.log(response)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="m-2">
            <label htmlFor="title">Title</label>
            <input className="m-2 bg-blue-100" type="text" {...register("title")} />
            {errors.title ? <p>{errors.title.message}</p> : ""}<br></br>
            < label htmlFor="body" > Text</label >
            <textarea className="bg-blue-100 w-100 m-2" {...register("body")} /><br></br>
            <p>{errors.body?.message}</p>
            <button type="submit" className="bg-gray-200 rounded-xl p-2 w-110">Send</button>
        </form >
    )
}