/** @format */
'use client';

import Calendar from "@/components/calendar";
import UserInformation from "@/components/user-information";
import { useFormState } from "../../components/form-context"

export default function Appointments() {
  const { sidebarOpen } = useFormState();

  return (
    <div className="grid grid-cols-5 md:grid-cols-1 xl:grid-cols-6">
      <div className={`${sidebarOpen ? 'col-span-5' : 'col-span-6'} border-r border-gray px-5`}> <Calendar /></div>
      {sidebarOpen &&
        <div className="">
          <UserInformation />
        </div>
      }
    </div>
  )
}
