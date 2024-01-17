import React, { useState } from 'react';
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

type Props = {
    address: string | undefined 
    phone: string | undefined , 
    building: string | undefined , 
    email: string | undefined 
};

export default function ClinicDetails({ address, phone, building, email}: Props) {
    const parts = building?.split(', ');

    return (
        <div className="py-4 px-6 h-full">
            <div className="grid gap-4">
                <div className="flex rounded-full bg-meta-2 dark:bg-meta-4 text-light-gray">
                    <p>CLINIC DETAILS</p>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-2">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center">
                            <Image src={`/images/user/user-01.png`} alt="User" width={40} height={40} />
                        </span>
                    </div>
                    <div className="flex flex-col col-span-5">
                        <span className="text-sm font-bold">{parts?.[0]}</span>
                        <span className="text-sm">{parts?.[1]}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><MdOutlineMail />Email:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{email}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium text-light-gray gap-2 items-center"><FiPhone />Phone:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{phone}</span>
                    </div>
                </div>
                <div className="grid grid-cols-8 md:grid-cols-8 xl:grid-cols-8">
                    <div className="col-span-3">
                        <span className="flex text-sm font-medium items-center gap-1 text-light-gray"><CiLocationOn />Address:</span>
                    </div>
                    <div className="col-span-5">
                        <span className="text-sm font-medium">{address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}