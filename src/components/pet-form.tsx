import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";

type TFormValues = {
    petName: string;
    breed: string;
    birthday: Date;
    gender: string;
    photo: File | null;
};

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${now.getDate().toString().padStart(2, '0')}`;

    return `${year}-${month}-${day}`;
};


export function PetForm() {
    const [loading, setLoading] = useState(false);
    const { onHandleNext, setFormData, onHandleBack, formData, url, setUrl } = useFormState();
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData,
    });
    const [maxDate, setMaxDate] = useState(getCurrentDateTime());

    const onHandleFormSubmit = (data: TFormValues) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
        onHandleNext();
    };

    const onImageChange = async (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            const body = new FormData();

            body.append('file', file);
            body.append('upload_preset', 'test_upload');

            setLoading(true);
            try {
                const res = await fetch(
                    'https://api.cloudinary.com/v1_1/dtnfy1jjc/image/upload',
                    {
                        method: 'POST',
                        body,
                    }
                ).then((r) => r.json());

                setUrl(res.secure_url);
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error if needed
            } finally {
                // Set loading to false after the upload is complete (success or failure)
                setLoading(false);
            }

        }
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onHandleFormSubmit)}
        >
            <div className="max-w-md mx-auto rounded-lg shadow-lg text-center">
                <label htmlFor="photo" className="cursor-pointer">
                    <input
                        type="file"
                        id="photo"
                        {...register("photo")}
                        accept="image/*"
                        onChange={onImageChange}
                        className="filetype hidden"
                    />
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white mx-auto relative">
                        {loading ? (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <span className="h-screen w-full flex justify-center items-center flex-col gap-2">
                                    <span className="animate-spin relative flex text-orange">
                                        <AiOutlineLoading className="h-6 w-6"/>
                                    </span>
                                    <span className="text-white text-xs">Uploading...</span>
                                </span>
                            </div>
                        ) : url ? (
                            <div className="w-full h-full">
                                <Image src={url} alt="User" width={80} height={80} className="w-full h-full object-cover" />
                                <div className="overlay absolute inset-0 flex items-center justify-center bg-gray bg-opacity-50 text-dark opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    Change Photo
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <Image src={`/images/user/dog.png`} alt="User" width={80} height={80} className="w-full h-full object-cover" />
                                <div className="overlay absolute inset-0 flex items-center justify-center bg-gray bg-opacity-50 text-dark opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    Change Photo
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-white text-xl mt-2">Photo of your Pet</p>
                </label>
            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="petName" className="text-white">Pet Name:</label>
                <input
                    id="petName"
                    {...register("petName")}
                    className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                    required={true}
                />
            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="breed" className="text-white">Breed:</label>
                <input
                    id="breed"
                    {...register("breed")}
                    className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                    required={true}
                />
            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="gender" className="text-white">Gender:</label>
                <select id="gender"  {...register("gender")} className="border h-11 px-4 rounded-md" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

            </div>
            <div className="flex gap-1 flex-col">
                <label htmlFor="birthday" className="text-white">Birthday:</label>
                <input
                    type="date"
                    id="birthday"
                    {...register("birthday")}
                    className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                    required={true}
                    max={maxDate}
                />
            </div>
            <div className="flex gap-4 justify-end">
                <button
                    type="button"
                    onClick={onHandleBack}
                    className="h-11 px-6 inline-block bg-orange font-semibold text-white rounded-md"
                >
                    Back
                </button>
                <button className="h-11 px-6 inline-block bg-orange  bg-blue-600 font-semibold text-white rounded-md">
                    Next
                </button>
            </div>
        </form>
    );
}