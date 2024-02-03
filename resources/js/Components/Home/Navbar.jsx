import { Link } from "@inertiajs/react";

export default function NavBar() {
    return (
        <>
            <nav>
                <ul className="flex justify-center items-center 
                gap-[1.2em] list-none py-[1em] border-t-[1px] border-solid border-[#efeff4] cursor-pointer">
                    <Link className="font-sans md:font-serif font-normal text-[20px] max-w-[5em]" href="/">
                        Home
                    </Link>
                    <li className="ont-sans md:font-serif">CATALOG</li>
                    <li className="ont-sans md:font-serif">ABOUT US</li>
                    <li className="ont-sans md:font-serif">CONTACT US</li>
                </ul>
            </nav>
        </>
    )
}