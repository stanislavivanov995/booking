import { useEffect, useState } from "react";
import { router, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";

import { loadStripe } from "@stripe/stripe-js";

import { Button, Modal } from "flowbite-react";
import InputError from "@/Components/InputError";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import TextInput from "@/Components/TextInput";



export default function DetailsBookingModal({ auth, estate, setOpenModal, openModal }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        checkIn: "",
        // checkOut: "",
        // estateId: "",
        userId: "",
    });

    const [modalPlacement, setModalPlacement] = useState("center");
    const [modalErrorMsg, setModalErrorMsg] = useState("");


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const [reservationData, setReservationData] = useState({
        'name': "",
        'last_name': "",
        'email': auth.user ? auth.user.email : "",
        'phone': "",
        'checkIn': new Date(),
        'checkOut': new Date(),
        'estateId': estate.id ? estate.id : "",
        'userId': "",
    });

    const handleCheckInDate = (selectedItem) => {
        setData("check_in", selectedItem);
    };

    const handleCheckOutDate = (selectedItem) => {
        setData("check_out", selectedItem);
    };

    const notify = () => toast.success(`${estate.name} was successfuly booked!`)


    useEffect(() => {
        setData(state => ({
            ...state,
            ...reservationData
        }));
    }, [reservationData])

    const handleBook = async (e) => {
        e.preventDefault();

        post(route("estate.book"))
        setOpenModal(false);
        Swal.fire(
            "Done!",
            `You have just booked "${estate.name}"! <br />
            <h3>You can check your reservation in your <b><a class="" href="/dashboard">Dashboard</a></b>`,
            "success"
        );

        // notify();
    };

    const handleReservationChange = (e) => {
        setReservationData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const makePayment = async () => {
        const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

        const body = {
            products: estate,
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch("/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });
    };

    return (
        <>
            {auth.user ?
                <Modal
                    show={openModal}
                    position={modalPlacement}
                    onClose={() => setOpenModal(false)}
                    className="absolute mt-24 mx-auto w-1/3 min-w-[23em] text-indigo-600"
                >
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                    <div className="relative z-20 bg-white rounded-2xl">
                        <Modal.Header className="border-none">
                            <span className="text-gray-900 font-bold text-2xl">
                                {estate.name}
                            </span>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="flex flex-col justify-center items-center gap-5">
                                <div className="flex gap-5 justify-center items-center flex-wrap">
                                    <div>
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            First name
                                        </label>
                                        <TextInput
                                            type="text"
                                            id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] p-2.5"
                                            placeholder="John"
                                            name='name'
                                            required
                                            value={
                                                reservationData.name
                                                    ? reservationData.name
                                                    : ''
                                            }
                                            onChange={handleReservationChange}
                                        // onChange={(e) => setData("name", e.target.value)}
                                        />
                                        {/* <InputError className="mt-2" message={errors.name} /> */}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="last_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Last name
                                        </label>
                                        <TextInput
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] p-2.5"
                                            placeholder="Doe"
                                            required
                                            value={
                                                reservationData.last_name
                                                    ? reservationData.last_name
                                                    : ''
                                            }
                                            onChange={handleReservationChange}
                                        // onChange={(e) => setData("last_name", e.target.value)}
                                        />
                                        {/* <InputError className="mt-2" message={errors.last_name} /> */}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-center items-center flex-wrap">
                                    <div>
                                        <label
                                            htmlFor="input-group-1"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Your Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <svg
                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <TextInput
                                                type="text"
                                                id="input-group-1"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] ps-10 p-2.5"
                                                placeholder="email@example.com"
                                                name="email"
                                                required
                                                value={
                                                    auth.user ? auth.user.email : ""
                                                }
                                                defaultValue={auth.user ? auth.user.email : ""}
                                                onChange={handleReservationChange}
                                            // onChange={(e) => setData("email", e.target.value)}
                                            />
                                        </div>
                                        {/* <InputError message={errors.email} /> */}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone-input"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Phone number
                                        </label>
                                        <div className="flex bg-gray-50 border border-gray-300 rounded-lg">
                                            <div className="flex items-center pointer-events-none pl-2">
                                                <svg
                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 19 18"
                                                >
                                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                </svg>
                                            </div>
                                            <TextInput
                                                type="text"
                                                id="phone-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border-none text-gray-900 text-sm block w-[190px] ps-10 p-2.5"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                placeholder="Phone number"
                                                required
                                                name="phone"
                                                value={
                                                    reservationData.phone
                                                        ? reservationData.phone
                                                        : ''
                                                }
                                                onChange={handleReservationChange}
                                            // onChange={(e) => setData("phone", e.target.value)}
                                            />
                                        </div>
                                        {/* <InputError className="mt-2" message={errors.phone} /> */}
                                    </div>
                                </div>
                                <div className="flex gap-5 flex-wrap justify-center items-center">
                                    <div>
                                        <label
                                            htmlFor="phone-input"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Start date
                                        </label>
                                        <DatePicker
                                            selected={startDate}
                                            name="checkIn"
                                            onChange={(date) => {
                                                handleCheckInDate(date);
                                                setStartDate(date);
                                            }}
                                            selectsStart
                                            startDate={startDate}
                                            minDate={new Date()}
                                            endDate={endDate}
                                            className="block w-[210px] lg:m-0 border border-[#d1d5db] rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone-input"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            End date
                                        </label>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => {
                                                handleCheckOutDate(date);
                                                setEndDate(date);
                                            }}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            className="block w-[210px] lg:m-0 border border-[#d1d5db] rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full m-auto">
                                        <h2 className="mb-3 text-center">Payment method</h2>
                                        <div className="flex justify-center gap-12 mt-5">
                                            <div className="flex gap-3 border items-center justify-between px-2 border-[#d1d5db] w-[200px] rounded-xl">
                                                <label
                                                    htmlFor="cashPayment"
                                                    className="block text-sm font-medium text-gray-900"
                                                >
                                                    Cash
                                                </label>
                                                <TextInput
                                                    type="checkbox"
                                                    id="cashPayment"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                                    required
                                                    name='cash'
                                                    checked
                                                />
                                            </div>
                                            <div className="flex gap-3 border items-center justify-between px-2 py-2 border-[#d1d5db] w-[200px] rounded-xl">
                                                <label
                                                    htmlFor="payment"
                                                    className="block text-sm font-medium text-gray-900"
                                                >
                                                    With card
                                                </label>
                                                <TextInput
                                                    title="Comming soon"
                                                    type="checkbox"
                                                    id="cardPayment"
                                                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                                    required
                                                    name='cashPayment'
                                                    disabled
                                                // onChange={handleReservationChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {modalErrorMsg && (
                                        <h1>{modalErrorMsg}</h1>
                                    )}
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="flex gap-3 border-none">
                            <Button
                                className="bg-red-400 hover:bg-red-300"
                                onClick={() => setOpenModal(false)}
                            >
                                Decline
                            </Button>
                            <Button
                                onClick={handleBook}
                                className="bg-indigo-400 hover:bg-indigo-300"
                            >
                                Book
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>

                :
                <Modal
                    show={openModal}
                    position={modalPlacement}
                    onClose={() => setOpenModal(false)}
                    className="absolute mt-24 mx-auto w-1/3 min-w-[23em] text-indigo-600"
                >
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                    <div className="relative z-20 bg-white rounded-2xl text-center">
                        <Modal.Body>
                            <h4 className="mb-7 text-[20px] text-black">You have to be Logged in to make your reservation</h4>
                            <a href={route("login")} className="text-[18px] px-4 py-2 bg-zinc-800 text-white rounded-xl hover:shadow-xl duration-300">Log in</a>
                        </Modal.Body>
                        <Modal.Footer className="flex gap-3 border-none items-center">
                            <Button
                                className="bg-red-400 hover:bg-red-300"
                                onClick={() => setOpenModal(false)}
                            >
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>

            }
        </>
    )
}