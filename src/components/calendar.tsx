/** @format */
"use client";

import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Modal from './calendar-modal';
import { useFormState } from './form-context';
import { Toaster } from 'sonner'


function calculateAge(birthdate: Date) {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }

    return age;
}

export default function Calendar({ }) {
    
    const { setModalIsOpen, events, setSidebarOpen, setEventInfo, searchText } = useFormState();
    const handleOpen = () => setModalIsOpen((cur) => !cur);
    const handleEventClick = (info: any) => {
        setEventInfo({
            eventId: info.event._def.extendedProps.eventId,
            clientName: info.event._def.extendedProps.ownerName,
            petName: info.event._def.extendedProps.petName,
            email: info.event._def.extendedProps.email,
            phone: info.event._def.extendedProps.contact,
            address: info.event._def.extendedProps.address,
            breed: info.event._def.extendedProps.breed,
            sex: info.event._def.extendedProps.gender,
            age: calculateAge(info.event._def.extendedProps.birthday),
            url: info.event._def.extendedProps.imageUrl,
            birthday: info.event._def.extendedProps.birthday,
            vetName: info.event._def.extendedProps.vetName,
            start: info.event.start,
            end: info.event.end,
        })
        setSidebarOpen(true);
    };

    const eventsList = events.filter((item: any) =>  item.title.toLowerCase().includes(searchText))

    return (
        <div className="flex flex-col">
            <Toaster richColors position="top-right"/>
            <p className="my-5">Appointments</p>
            <FullCalendar
                events={eventsList}
                customButtons={{ customButton: { text: 'New Appoinment', click: function () { setModalIsOpen(true) } } }}
                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                headerToolbar={{
                    left: "prev next",
                    center: "title",
                    right: "dayGridMonth,timeGridDay customButton",
                }}
                // nowIndicator={true}
                expandRows={true}
                editable={true}
                height={850}
              
                allDaySlot={false}
                eventClick={handleEventClick}
            //  eventContent={renderEventContent}
            />
            <Modal handleOpen={handleOpen} />
        </div>
    )
}
