import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";
import vetInfo from '../data/veterinary.json'
import appointment from '../data/appointment.json'

type TFormValues = {
    vetName: string;
    services: string;
    startDate: Date;
    endDate: Date;
    color: string
};

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${now.getDate().toString().padStart(2, '0')}`;
    const hours = `${now.getHours().toString().padStart(2, '0')}`;
    const minutes = `${now.getMinutes().toString().padStart(2, '0')}`;

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export function VeterinaryForm() {
    const { onHandleNext, setFormData, formData } = useFormState();
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData,
    });
    const [minDate, setMinDate] = useState(getCurrentDateTime());

    const onHandleFormSubmit = (data: TFormValues) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
        onHandleNext();
    };


    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onHandleFormSubmit)}
        >
            <div className="flex gap-1 flex-col">
                <label htmlFor="vetName" className="text-white">Select veterinary:</label>
                <select id="vetName"  {...register("vetName")} className="border h-11 px-4 rounded-md" required defaultValue="">
                    <option disabled hidden value="">Select an option</option>
                    {vetInfo.map((item) => (
                        <option value={item.veterinary_name} key={item.id}>{item.veterinary_name}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="services" className="text-white">Select services:</label>
                <select id="name"  {...register("services")} className="border h-11 px-4 rounded-md focus:outline-blue-500" required defaultValue="">
                    <option disabled hidden value="">Select an option</option>
                    {appointment.map((item) => (
                        <option value={item.appointment_name} key={item.id}>{item.appointment_name}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="color" className="text-white">Event color:</label>
                <input
                    type="color"
                    id="color"
                    {...register("color")}
                    className="border w-full h-11 px-4 rounded-md focus:outline-blue-500 "
                />
            </div>
            <div className="flex">
                <div className="flex gap-1 flex-col w-1/2">
                    <label htmlFor="startDate" className="text-white">Start Date:</label>
                    <input
                        type="datetime-local"
                        id="startDate"
                        {...register("startDate")}
                        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                        required={true}
                        min={minDate}
                    />
                </div>
                <div className="flex gap-1 flex-col w-1/2">
                    <label htmlFor="endDate" className="text-white">End Date:</label>
                    <input
                        type="datetime-local"
                        id="endDate"
                        {...register("endDate")}
                        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                        required={true}
                        min={minDate}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="h-11 px-6 inline-block bg-orange font-semibold text-white rounded-md">
                    Next
                </button>
            </div>
        </form>
    );
}
