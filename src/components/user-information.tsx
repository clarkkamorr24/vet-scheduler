/** @format */

import React from "react";
import Image from "next/image";
import ContactInformation from "./contact-information";
import ClinicDetails from "./clinic-details";
import PetDetails from "./pet-details";
import { useFormState } from "./form-context";
import vetInfo from "../data/veterinary.json";
import DeleteModal from "./delete-event";
import UpdateModal from "./update-event";

export default function UserInformation({}) {
  const { eventInfo, setSidebarOpen, setDeleteModal, setUpdateModal } =
    useFormState();
  const handleDeleteOpen = () => setDeleteModal((cur) => !cur);
  const handleUpdateOpen = () => setUpdateModal((cur) => !cur);
  const {
    address,
    age,
    birthday,
    breed,
    clientName,
    email,
    phone,
    sex,
    petName,
    vetName,
    url,
  } = eventInfo;
  const foundVet = vetInfo.find((vet) => vet.veterinary_name === vetName);

  function handleDelete() {
    setDeleteModal(true);
  }

  function handleUpdate() {
    setUpdateModal(true);
  }

  return (
    <div className="grid grid-rows-16 h-full">
      <div className="flex justify-end mr-5 mt-2">
        <span
          className=" cursor-pointer hover:text-orange text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          x
        </span>
      </div>
      <div className="row-span-1 border-b border-gray">
        <div className="grid shadow-sm dark:border-gray-700 md:grid-cols-3 bg-white dark:bg-gray-800 h-full p-6">
          <div className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 w-screen mx-auto">
            <div className="relative h-14 w-14 rounded-full">
              <Image
                src={`/images/user/user-15.png`}
                alt="User"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-bold text-black">{clientName}</h5>
                <p>
                  <span className="text-sm text-black">Client Name</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-3 bg-white border-b border-gray">
        <ContactInformation phone={phone} email={email} address={address} />
      </div>
      <div className="row-span-3 bg-white border-b border-gray">
        <ClinicDetails
          address={foundVet?.address}
          phone={foundVet?.contact_number}
          building={foundVet?.building}
          email={foundVet?.email}
        />
      </div>
      <div className="row-span-3 bg-white border-b border-gray">
        <PetDetails
          breed={breed}
          sex={sex}
          age={age}
          birthday={birthday}
          petName={petName}
          url={url}
        />
      </div>
      <div className="row-span-2 bg-white px-2 ">
        <div className="grid gap-2 py-4 h-full">
          <div
            className="inline-flex items-center justify-center py-2 text-center font-medium text-white bg-orange w-full rounded-lg cursor-pointer"
            onClick={() => handleUpdate()}
          >
            Reschedule Appointment
          </div>
          <div
            className="inline-flex items-center justify-center py-2 text-center font-medium text-white bg-medium-orange w-full rounded-lg cursor-pointer"
            onClick={() => handleDelete()}
          >
            Cancel Appointment
          </div>
        </div>
      </div>
      <DeleteModal handleOpen={handleDeleteOpen} />
      <UpdateModal handleOpen={handleUpdateOpen} />
    </div>
  );
}
