import Footer from "@/Components/Home/Footer";
import ClientLayout from "@/Layouts/ClientLayout";
import { CurrencyContext } from "@/context/currencyContext";
import { Button, Modal } from "flowbite-react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailsFacitlities from "./DetailsFacilities";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import InputError from '@/Components/InputError';
import { Link } from "@inertiajs/inertia-react";
import DetailsRating from "./DetailsFeatures/DetailsRating";
import CommentSection from "./DetailsFeatures/CommentSection";

const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

export default function Details({ auth, estate, facilities, images }) {
    const { setData, post, errors } = useForm({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        checkIn: "",
        // checkOut: "",
        // estateId: "",
        userId: "",
    });
    console.log(`Errors: ${errors}`);

    const { formatPrice, currency } = useContext(CurrencyContext);
    const [selectedImage, setSelectedImage] = useState(defaultImage);
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement, setModalPlacement] = useState("center");

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

    useEffect(() => {
        setData(state => ({
            ...state,
            ...reservationData
        }));
    }, [reservationData])

    const handleReservationChange = (e) => {
        setReservationData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const handleCheckInDate = (selectedItem) => {
        setData("check_in", selectedItem);
    };

    const handleCheckOutDate = (selectedItem) => {
        setData("check_out", selectedItem);
    };

    if (images.length > 0 && selectedImage === defaultImage) {
        setSelectedImage(images[0].url);
    }

    const handleBook = async () => {
        post(route("estate.book"))
        setOpenModal(false);
        Swal.fire(
            "Done!",
            `You have just booked "${estate.name}"!`,
            "success"
        );
    };

    // const handleBook = async () => {
    //     try {
    //         await post(route("estate.book"));
    //         // Ако не възникнат грешки, значи операцията е успешна
    //         setOpenModal(false);
    //         Swal.fire(
    //             "Done!",
    //             `You have just booked "${estate.name}"!`,
    //             "success"
    //         );
    //     } catch (error) {
    //         // Ако възникне грешка при изпълнението на заявката
    //         console.error("Error while handling book:", error);
    //         // Тук можете да добавите логика за обработка на грешката или да не правите нищо
    //         // Зависи от това как искате да управлявате грешките в приложението си
    //     }
    // };


    const handleSelectedImage = (event) => {
        setSelectedImage(event.target.src);
    };

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
        <ClientLayout auth={auth}>
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
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] p-2.5"
                                            placeholder="John"
                                            required
                                            name='name'
                                            value={
                                                reservationData.name
                                                    ? reservationData.name
                                                    : ''
                                            }
                                            onChange={handleReservationChange}
                                        />
                                        <InputError className="mt-2" message={errors.name} />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Last name
                                        </label>
                                        <input
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
                                        />
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
                                            <input
                                                type="text"
                                                id="input-group-1"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] ps-10 p-2.5"
                                                placeholder="email@example.com"
                                                name="email"
                                                required
                                                // value={
                                                //     auth.user ? auth.user.email : ""
                                                // }
                                                defaultValue={auth.user ? auth.user.email : ""}
                                                onChange={handleReservationChange}
                                            />
                                        </div>
                                        <InputError className="mt-2" message={errors.email} />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone-input"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Phone number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
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
                                            <input
                                                type="text"
                                                id="phone-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[210px] ps-10 p-2.5"
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
                                            />
                                            <InputError className="mt-2" message={errors.phone} />
                                        </div>
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
                                        <div className="flex justify-around">
                                            <div className="flex gap-3 border items-center justify-between px-2 border-[#d1d5db] w-[200px] rounded-xl">
                                                <label
                                                    htmlFor="cashPayment"
                                                    className="block text-sm font-medium text-gray-900"
                                                >
                                                    Cash
                                                </label>
                                                <input
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
                                                <input
                                                    title="Comming soon"
                                                    type="checkbox"
                                                    id="cardPayment"
                                                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                                    required
                                                    name='cashPayment'
                                                    disabled
                                                    onChange={handleReservationChange}
                                                />
                                                <InputError className="mt-2" message={errors.name} />
                                            </div>
                                        </div>
                                    </div>
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
                                className="bg-indigo-400 hover:bg-indigo-300"
                                onClick={handleBook}
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

                    <div className="relative z-20 bg-white rounded-2xl">
                        <Modal.Body>
                            <h4>You have to be Logged in to make your reservation</h4>
                            <Link href={route("login")}>Log in</Link>
                        </Modal.Body>
                        <Modal.Footer className="flex gap-3 border-none">
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


            <section className=" bg-gray-200">
                <div>
                    {images.length > 0 ? (
                        <div
                            className="flex flex-col items-center w-[90%] md:w-[80%] m-auto bg-gray-200 justify-center p-2
                        2xl:w-full xl:w-[95%] xl:items-center lg:m-auto sm:ml-0 md:ml-[6em]"
                        >
                            <img
                                src={selectedImage}
                                alt="selected image"
                                className=" block rounded-xl sm:w-[60%] w-full h-auto sm:h-[700px] md:w-[90%] lg:w-[80%] 2xl:w-[60%] "
                            />
                            <div className="flex justify-center gap-4 max-w-[27em] flex-wrap mt-8">
                                {images.map((img) => (
                                    <img
                                        key={img.url}
                                        className="w-24 h-[6em] max-sm:w-20 cursor-pointer opacity-65 hover:opacity-100"
                                        src={img.url}
                                        alt="estate image"
                                        onClick={handleSelectedImage}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center m-auto w-full bg-gray-200 justify-center p-2">
                            <img src={selectedImage} alt="selected image" />
                        </div>
                    )}
                </div>

                <div
                    id="wrapper"
                    className="pb-5 flex flex-col  items-center m-auto px-2 2xl:pr-[2em] justify-between align-middle 
                2xl:w-full xl:w-[90%] w-full xl:items-center 2xl:flex-row 2xl:items-start"
                >
                    {/* top-section-container */}
                    <div className="bg-white m-5 ml-5 w-[90%] xl:w-[90%] rounded-xl">
                        <div>
                            <div className="flex items-center w-full ml-auto gap-2 pt-6 pl-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={"25px"}
                                    height={"25px"}
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                                </svg>
                                <p>{moment(estate.created_at).format("LL")}</p>
                            </div>
                            <div className="p-10 pt-5 flex justify-between flex-col sm:flex-row">
                                <div>
                                    <h1 className="text-[35px] text-zinc-800 font-bold">
                                        {estate.name}
                                    </h1>
                                    <div className="flex items-center  gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 384 512"
                                        >
                                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                        </svg>
                                        <h4 className="w-[65px]">
                                            {estate.location}
                                        </h4>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-[20px] mt-5 sm:mt-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fa-solid fa-house text-[30px]"
                                        width="35px"
                                        height="35px"
                                        viewBox="0 0 576 512"
                                    >
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                    </svg>
                                    <p>{estate.category.name}</p>
                                </div>
                                <div className="flex gap-[3em] items-center sm:justify-start sm:mt-0 justify-evenly mt-10 text-center">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={"35px"}
                                            height={"35px"}
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                                        </svg>
                                        <p className="font-bold text-[18px]">
                                            {estate.beds === null
                                                ? "1"
                                                : estate.beds}
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={"35px"}
                                            height={"35px"}
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16z" />
                                        </svg>
                                        <p className="font-bold text-[18px]">
                                            {estate.rooms === null
                                                ? "1"
                                                : estate.rooms}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* facilities */}
                            <hr />
                            <h2 className="text-[30px] pl-0 sm:pl-10 pt-3 font-bold text-center">
                                Available facitilies{" "}
                                <span className="flex sm:justify-start justify-center gap-2 text-[13px] w-full font-italic">
                                    (need to have{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>{" "}
                                    icon below the name)
                                </span>
                            </h2>
                            <div className="sm:flex sm:flex-wrap items-center justify-around p-2 grid grid-cols-2">
                                <DetailsFacitlities
                                    availableFacilities={facilities}
                                />
                            </div>
                            <hr />
                            {/* facilities */}
                        </div>
                        {/* top-section-container */}

                        {/* bottom-section */}
                        <div className="p-10">
                            <h2 className="text-[25px] font-bold mb-5">
                                About this estate
                            </h2>
                            <p>
                                {estate.description === null
                                    ? "No description"
                                    : estate.description}
                            </p>
                        </div>
                        {/* bottom-section */}
                    </div>
                    {/* Right section */}
                    <div className="bg-white mx-5 my-5 h-[370px] lg:w-[60%] md:w-[80%] sm:w-[30%] xl:w-[60%] 2xl:w-[35%] w-[80%] rounded-xl">
                        <div className="bg-zinc-800 h-[50px] flex gap-2 items-center rounded-t-xl justify-center px-2 text-[18px] text-white">
                            <h2>
                                {formatPrice(
                                    estate.price,
                                    estate.currency,
                                    currency
                                )}{" "}
                                {currency} /
                            </h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-yellow-400"
                                width="20px"
                                height="20px"
                                viewBox="0 0 384 512"
                            >
                                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                            </svg>
                        </div>
                        <div className="flex flex-col h-[80%] items-center  text-[20px] justify-evenly gap-2 mt-5">
                            <DetailsRating />
                            <h2>OWNER</h2>
                            <p className="text-[25px] font-bold">
                                {estate.user.name}
                            </p>
                            <div className="flex items-center gap-5">
                                <i className="fa-solid fa-phone"></i>
                                <h3>{estate.user.email}</h3>
                            </div>
                            <span className="border border-t-gray-500"></span>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={"25px"}
                                    height={"25px"}
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                </svg>
                                <p>
                                    {estate.arrive_hour}-{estate.leave_hour}
                                </p>
                            </div>
                            <button
                                className="w-[80%] bg-zinc-800 py-2 rounded-xl text-white px-2 my-5 m-auto self-end hover:opacity-45 duration-100"
                                onClick={() => setOpenModal(true)}
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                    {/* Right section */}
                </div>
            </section>

            <section className="bg-gray-200">
                <CommentSection />
            </section>

            <Footer />
        </ClientLayout>
    );
}
