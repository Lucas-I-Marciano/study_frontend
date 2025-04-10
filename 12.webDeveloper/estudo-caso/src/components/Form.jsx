import { useParams } from "react-router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast, ToastContainer } from 'react-toastify';

const schema = yup.object({
    name: yup.string().required("Car's name required"),
    brand: yup.string().min(1, "Car's brand required").required("Car's brand required"),
    color: yup.string().required("Car's color required"),
    type: yup.string().required("Car's type required"),
}).required()

let carId = 0
const createCar = (id, data) => localStorage.setItem(`car-${id}`, JSON.stringify(data))
const getCar = id => {
    return localStorage.getItem(`car-${id}`)
}
const createId = () => {
    carId++
    return carId
}

export const Form = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const { id } = useParams()
    if (id) {
        const car = JSON.parse(getCar(id))
        if (!car) {
            toast.warning("Car not founded!")
            return <>
                <h2 className="text-xl text-grey-600 m-5">Car not founded!</h2>
                <ToastContainer />
            </>
        }
        Object.entries(car).forEach(([key, value]) => {
            setValue(key, value)
        })


    }

    const onSubmitFunction = (data) => {
        const createdId = id ? id : createId(carId)
        createCar(createdId, data);
        toast('Car created!');
        reset()
    }



    return (<form className="flex flex-col p-5" onSubmit={handleSubmit(onSubmitFunction)}>
        <h2 className="text-3xl pb-5">Car</h2>
        <label className="mb-4">
            Car's name
            <input className="ml-2 bg-blue-200  rounded-md" {...register("name")}></input>
            {errors.name ? <span className="text-red-500 ml-1 text-xs">{errors.name.message}</span> : ""}
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
            {errors.brand ? <span className="text-red-500 ml-1 text-xs">{errors.brand.message}</span> : ""}
        </label>
        <label className="mb-4">
            Car's color
            <input {...register("color")} className="ml-2 bg-blue-200  rounded-md"></input>
            {errors.color ? <span className="text-red-500 ml-1 text-xs">{errors.color.message}</span> : ""}
        </label>
        <label className="mb-4">
            Car's type
            <input {...register("type")} className="ml-2 bg-blue-200  rounded-md"></input>
            {errors.type ? <span className="text-red-500 ml-1 text-xs">{errors.type.message}</span> : ""}
        </label>
        <button type="submit" className="w-20 bg-blue-100 rounded-md p-2 hover:bg-sky-700 hover:text-white"> Send! </button>
    </form>)
}