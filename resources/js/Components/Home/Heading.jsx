import { Link } from "@inertiajs/react";
import AvatarDropDown from "./AvatarDropDown";
import CurrencyDropdown from "../CurrencyDropdown";

export default function Heading({ auth }) {
    return (
        <>
            <header className="flex justify-between items-center py-4 px-6 shadow-xl">
                <Link className=" font-normal text-[20px] max-w-[5em]" href="/">
                    <img src="http://localhost:8000/storage/logo_MICASASUCASA.png" alt="" />
                </Link>
                <div className="flex justify-center items-center gap-4">
                    <a href="#faq">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:block hidden cursor-pointer"
                            height="30"
                            width="30"
                            viewBox="0 0 512 512"
                        >
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                        </svg>
                    </a>
                    <div className="sm:flex justify-center items-center gap-3 hidden border-l-black border-l p-2">
                        {/* TODO: When clicked will scroll down to faq section */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 512 512"
                        >
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>
                        <p>1267-713-158</p>
                    </div>
                    {auth?.user ? (
                        // <button className="cursor-pointer py-[0.8em] px-[1em] bg-black text-white font-bold outline-none border-none text-[16px]">
                        //     <Link
                        //         href={route('dashboard')}
                        //     >
                        //         Dashboard
                        //     </Link>
                        // </button>
                        <>
                            <CurrencyDropdown />
                            <AvatarDropDown user={auth.user} />
                        </>
                    ) : (
                        <>
                        <CurrencyDropdown />
                            <button className="cursor-pointer rounded-md py-[0.8em] px-[1em] bg-black text-white font-bold outline-none border-none text-[16px]">
                                <Link href={route("login")}>Log in</Link>
                            </button>

                            <button className="cursor-pointer rounded-md py-[0.8em] px-[1em] bg-black text-white font-bold outline-none border-none text-[16px]">
                                <Link href={route("register")}>Register</Link>
                            </button>
                        </>
                    )}
                </div>
            </header>
        </>
    );
}
