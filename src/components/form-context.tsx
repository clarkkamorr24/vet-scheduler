'use client';

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface IFormContext {
    defaultEvents: any;
    formData: any;
    eventInfo: any;
    setFormData: Dispatch<SetStateAction<any>>;
    events: any;
    url: string;
    searchText: string;
    resetForm: () => void;
    setEvents: Dispatch<SetStateAction<any>>
    setEventInfo: Dispatch<SetStateAction<any>>
    setUrl: Dispatch<SetStateAction<any>>
    setSearchText: Dispatch<SetStateAction<any>>
    onHandleBack: () => void;
    onHandleNext: () => void;
    step: number;
    updateModal: boolean;
    modalIsOpen: boolean;
    sidebarOpen: boolean;
    deleteModal: boolean;
    setUpdateModal: Dispatch<SetStateAction<boolean>>;
    setDeleteModal: Dispatch<SetStateAction<boolean>>;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const FormContext = createContext<IFormContext>({
    defaultEvents: {},
    formData: {},
    eventInfo: {},
    events: [{}],
    resetForm: () => { },
    onHandleBack: () => { },
    onHandleNext: () => { },
    setFormData: () => { },
    setEvents: () => { },
    setSearchText: () => { },
    setUrl: () => { },
    setEventInfo: () => { },
    url: "",
    searchText: "",
    step: 0,
    updateModal: false,
    deleteModal: false,
    modalIsOpen: false,
    sidebarOpen: false,
    setUpdateModal: () => { },
    setDeleteModal: () => { },
    setModalIsOpen: () => { },
    setSidebarOpen: () => { },

});

interface IProps {
    children: ReactNode;
}

const defaultEvents = [
    {
        eventId: 1,
        title: 'Checkup',
        start: '2024-01-17T01:30:00',
        end: '2024-01-17T03:30:00',
        ownerName: "Anne",
        email: "anne@gmail.com",
        contact: "09123456789",
        address: "Legazpi City",
        vetName: "John Fins",
        petName: "Lebron",
        breed: "Hybrid",
        gender: "Male",
        birthday: '2022-5-17',
        color: "red"
    },
    {
        eventId: 2,
        title: 'Vaccination',
        start: '2024-01-20T05:30:00',
        end: '2024-01-20T09:30:00',
        ownerName: "Robert",
        email: "robert@gmail.com",
        contact: "09574856789",
        address: "Robert City",
        vetName: "Anika Perry",
        petName: "Curry",
        breed: "Hybrid",
        gender: "Male",
        birthday: '2022-5-17',
        color: "purple"
    },
    {
        eventId: 3,
        title: 'Consultation',
        start: '2024-01-21T05:30:00',
        end: '2024-01-21T09:30:00',
        ownerName: "Kevin Durant",
        email: "kevin@gmail.com",
        contact: "1273473121",
        address: "Phoenix City",
        vetName: "Danica Jane",
        petName: "Irving",
        breed: "Askal",
        gender: "Male",
        birthday: '2022-5-17',
        color: "green"
    },
    {
        eventId: 4,
        title: 'Blood Test',
        start: '2024-01-22T05:30:00',
        end: '2024-01-22T09:30:00',
        ownerName: "Micahel Jordan",
        email: "micahel@gmail.com",
        contact: "5678212+1",
        address: "Chicago City",
        vetName: "John Fins",
        petName: "Scottie",
        breed: "Pitbull",
        gender: "Male",
        birthday: '2022-5-17',
        color: "orange"
    },
    {
        eventId: 5,
        title: 'Physical Examination',
        start: '2024-01-24T05:00',
        end: '2024-01-24T09:30:00',
        ownerName: "Nikola Jokic",
        email: "robert@gmail.com",
        contact: "09574856789",
        address: "Denver City",
        vetName: "Luke Sampson",
        petName: "Jamal",
        breed: "Poodle",
        gender: "Male",
        birthday: '2022-5-17',
    },

]

export function FormProvider({ children }: IProps) {
    const [searchText, setSearchText] = useState("");
    const [url, setUrl] = useState("");
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(1);
    const [events, setEvents] = useState(defaultEvents);
    const [eventInfo, setEventInfo] = useState({});
    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function onHandleNext() {
        setStep((prev) => prev + 1);
    }

    function onHandleBack() {
        setStep((prev) => prev - 1);
    }

    function resetForm() {
        setFormData({});
        setStep(1);
        setUrl("");
        setModalIsOpen(false);
    }

    return (
        <FormContext.Provider
            value={{
                formData,
                setFormData,
                onHandleBack,
                onHandleNext,
                step,
                events,
                setEvents,
                modalIsOpen,
                setModalIsOpen,
                resetForm,
                sidebarOpen,
                setSidebarOpen,
                eventInfo,
                setEventInfo,
                deleteModal,
                setDeleteModal,
                url,
                setUrl,
                defaultEvents,
                updateModal,
                setUpdateModal,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export function useFormState() {
    return useContext(FormContext);
}
