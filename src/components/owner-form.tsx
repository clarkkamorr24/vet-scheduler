import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

type TFormValues = {
  eventId: string;
  ownerName: string;
  email: string;
  contact: string;
  address: string;
  vetName: string;
  services: string;
  startDate: Date;
  endDate: Date;
  photo: string;
  petName: string;
  breed: string;
  gender: string;
  birthday: Date;
  url: string;
  color: string
};


export function OwnerForm() {
  const id = uuidv4();
  const { setFormData, setEvents, events, formData, onHandleBack, resetForm, setUrl, url } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));

    const eventDetails = {
      eventId: id,
      title: data.services,
      start: data.startDate,
      end: data.endDate,
      ownerName: data.ownerName,
      email: data.email,
      contact: data.contact,
      address: data.address,
      vetName: data.vetName,
      photo: data.photo,
      petName: data.petName,
      breed: data.breed,
      gender: data.gender,
      birthday: data.birthday,
      imageUrl: url,
      color: data.color
    }

    setEvents([eventDetails, ...events])

    resetForm();
    toast.success('Event successfully created!');
  };


  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex gap-1 flex-col">
        <label htmlFor="ownerName" className="text-white">{`Owner's Name:`}</label>
        <input
          id="ownerName"
          {...register("ownerName")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="email" className="text-white">{`Email:`}</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="contact" className="text-white">{`Contact number:`}</label>
        <input
          id="contact"
          {...register("contact")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          type="tel"
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="address" className="text-white">{`Address:`}</label>
        <input
          id="address"
          {...register("address")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
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
        <button className="h-11 px-6 inline-block bg-orange font-semibold text-white rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
}
