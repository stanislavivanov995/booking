import Description from "@/Components/Home/Description";
import FAQ from "@/Components/Home/FAQ";
import Footer from "@/Components/Home/Footer";
import HeadContainer from "@/Components/Home/HeadContainer";
import Heading from "@/Components/Home/Heading";
import LatestEstates from "@/Components/Home/LatestOffers";
import NavBar from "@/Components/Home/Navbar";

import { Head } from "@inertiajs/react";
import { useRef } from "react";

export default function Home({ auth, categories }) {

    const lastEstatesRef = useRef(null);
    const faqRef = useRef(null);
    const contactUsRef = useRef(null);

    return (
        <>
            <Head title="Home" />
            <div className="overflow-hidden">
                <Heading auth={auth} />
                <NavBar lastEstatesRef={lastEstatesRef} faqRef={faqRef} contactUsRef={contactUsRef} />
                <HeadContainer categories={categories} />
                <Description />
                <LatestEstates lastEstatesRef={lastEstatesRef} />
                <FAQ faqRef={faqRef} />
                <Footer contactUsRef={contactUsRef} />
            </div>
        </>
    );
}