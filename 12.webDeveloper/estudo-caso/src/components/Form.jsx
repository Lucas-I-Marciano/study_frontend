import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required("Car's name required"),
    brand: yup.string().min(1).required("Car's brand required"),
    color: yup.string().required("Car's color required"),
    type: yup.string().required("Car's type required"),
}).required()

let carId = 0

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    console.log(errors)
    const onSubmitFunction = (data) => console.log(data);


    return (<form className="flex flex-col p-5" onSubmit={handleSubmit(onSubmitFunction)}>
        <h2 className="text-3xl pb-5">Car</h2>
        <label className="mb-4">
            Car's name
            <input className="ml-2 bg-blue-200  rounded-md" {...register("name")}></input>
        </label>
        <label className="mb-4">
            Car`s brand
            <select {...register("brand")} className="ml-2 bg-blue-200  rounded-md">
                <option value="" hidden>-- Select Brand</option>
                <option value="bmw">BMW</option>
                <option value="fiat">Fiat</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="ford">Ford</option>
            </select>
        </label>
        <label className="mb-4">
            Car's color
            <input {...register("color")} className="ml-2 bg-blue-200  rounded-md"></input>
        </label>
        <label className="mb-4">
            Car's type
            <input {...register("type")} className="ml-2 bg-blue-200  rounded-md"></input>
        </label>
        <button type="submit" className="w-20 bg-blue-100 rounded-md p-2 hover:bg-sky-700 hover:text-white"> Send! </button>
    </form>)
}