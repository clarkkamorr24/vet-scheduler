import React from 'react';
import Image from "next/image";
import { PiDogLight } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { CiMedicalCross } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

type Props = {
    breed: string,
    sex: string,
    age: string,
    birthday: string,
    petName: string,
    url: string;
};

export default function PetDetails({ breed, sex, age, birthday, petName, url }: Props) {
    return (
        <div className="py-4 px-6 h-full">
            <div className="grid gap-4">
                <div className="flex rounded-full bg-meta-2 dark:bg-meta-4 text-light-gray">
                    <p>PET DETAILS</p>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-2">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center">
                            {url === undefined || url === "" ?
                                <Image src={`/images/user/dog.png`} alt="User" width={40} height={40} className='rounded-full h-10 w-10' />
                                :
                                <Image src={url} alt="User" width={40} height={40} className='rounded-full h-10 w-10' />
                            }
                        </span>
                    </div>
                    <div className="flex flex-col col-span-5">
                        <span className="text-sm font-bold">{petName}</span>
                        <span className="text-sm">Dog</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><PiDogLight />Breed:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{breed}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><BsGenderAmbiguous />Sex:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium capitalize">{sex}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><CiMedicalCross />Age:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{age}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><IoCalendarClearOutline />Birthday:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{birthday}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}