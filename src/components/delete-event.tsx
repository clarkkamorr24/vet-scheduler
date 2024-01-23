/** @format */
"use client";

import React from 'react';
import {
    Dialog,
    DialogBody,
    DialogFooter,
    Button,
} from "@material-tailwind/react";

import { useFormState } from './form-context';
import { toast } from 'sonner';

type EventModalProps = {
    handleOpen: () => void;
};


export default function DeleteModal({ handleOpen }: EventModalProps) {
    const { events, deleteModal, setEvents, eventInfo, setDeleteModal, setSidebarOpen } = useFormState();
    const { eventId } = eventInfo;

    function deleteEvent() {
        const indexToDelete = events.findIndex((item: any) => item.eventId === eventId);

        if (indexToDelete !== -1) {
            const updatedEvents = [...events];
            updatedEvents.splice(indexToDelete, 1);
            setEvents(updatedEvents);
        }

        setDeleteModal(false);
        setSidebarOpen(false);
        toast.success('Event has been cancelled!');
    }

    return (
        <>
            <Dialog open={deleteModal} handler={handleOpen} className='absolute flex flex-col gap-5 p-10 place-self-center w-[30rem] bg-dark mt-20 rounded-md top-20'>
                <DialogBody className='text-md font-bold  text-white'>
                    Are you sure you want to cancel the appoinment?
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-2 border text-white"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="text" color="green" onClick={deleteEvent} className='border bg-orange'>
                        <span className='text-white'>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}
