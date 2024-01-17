/** @format */
"use client";

import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import {
    Dialog,
    DialogBody,
    DialogFooter,
    Button,
} from "@material-tailwind/react";
import moment from 'moment';

import { useFormState } from './form-context';

type EventModalProps = {
    handleOpen: () => void;
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

export default function UpdateModal({ handleOpen }: EventModalProps) {
    const { events, updateModal, setEvents, eventInfo, setUpdateModal, setSidebarOpen } = useFormState();
    const [newStartDate, setNewStartDate] = useState("");
    const [newEndDate, setNewEndDate] = useState("");
    const [minDate, setMinDate] = useState(getCurrentDateTime());
    const { eventId, start, end } = eventInfo;
    const startDate = moment(start).format('YYYY-MM-DDTHH:mm');
    const endDate = moment(end).format('YYYY-MM-DDTHH:mm');
    

    function updateEvent() {
        const updatedEvents = events.map((event: any) => {
            if (event.eventId === eventId) {
                return {
                    ...event,
                    start: newStartDate === "" ? start : newStartDate,
                    end: newEndDate === "" ? end : newEndDate
                };
            } else {
                return event;

            }
        });
        setEvents(updatedEvents);
        setUpdateModal(false);
        setSidebarOpen(false);
        toast.success('Event successfully updated!'); // Displays a success message
    }

    return (
        <>
            <Toaster />
            <Dialog open={updateModal} handler={handleOpen} className='absolute flex flex-col gap-5 p-10 place-self-center w-[30rem] bg-dark mt-20 rounded-md top-20'>
                <DialogBody className='text-md font-bold  text-black'>
                    <p className='text-center text-xl mb-5 text-white'>Reschedule Appoinment</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="startDate" className="text-white">Start Date:</label>
                        <input
                            type="datetime-local"
                            id="startDate"
                            className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                            defaultValue={startDate}
                            onChange={(e) => setNewStartDate(e.target.value)}
                            min={minDate}
                            required={true}
                        />
                        <label htmlFor="endDate" className="text-white">End Date:</label>
                        <input
                            type="datetime-local"
                            id="endDate"
                            className="border h-11 px-4 rounded-md focus:outline-blue-500 "
                            defaultValue={endDate}
                            onChange={(e) => setNewEndDate(e.target.value)}
                            min={minDate}
                            required={true}
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="green" onClick={updateEvent} className='border bg-orange'>
                        <span className='text-white'>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}
