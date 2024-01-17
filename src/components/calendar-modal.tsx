/** @format */
"use client";
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import {
    Dialog,
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useFormState } from './form-context';
import { OwnerForm } from './owner-form';
import { VeterinaryForm } from './veterinary-form';
import { PetForm } from './pet-form';

type EventModalProps = {
    handleOpen: () => void;
};

function ActiveStepFormComponent() {
    const { step } = useFormState();
    switch (step) {
      case 1:
        return <VeterinaryForm />;
      case 2:
        return <PetForm />;
      case 3:
        return <OwnerForm />;
      default:
        return null;
    }
  }
  
export default function Modal({ handleOpen }: EventModalProps) {
    const { modalIsOpen } = useFormState();

    return (
        <>
            <Dialog
                size="xs"
                open={modalIsOpen}
                handler={handleOpen}
                className="bg-opacity-20 border-none bg-dark h-full"
            >
                <Card className="mx-auto w-full max-w-[25rem] bg-dark mt-20 rounded-md">
                    <CardBody className="flex flex-col gap-4">
                        <Typography className='text-orange text-2xl text-center'>
                            Schedule Appointment
                        </Typography>
                        <ActiveStepFormComponent />
                    </CardBody>
                </Card>
            </Dialog >
        </>
    )
}
