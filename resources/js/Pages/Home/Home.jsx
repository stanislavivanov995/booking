import Description from "@/Components/Home/Description";
import FAQ from "@/Components/Home/FAQ";
import Footer from "@/Components/Home/Footer";
import HeadContainer from "@/Components/Home/HeadContainer";
import Heading from "@/Components/Home/Heading";
import LatestEstates from "@/Components/Home/LatestOffers";
import NavBar from "@/Components/Home/Navbar";
import Awards from '@/Components/Home/Awards';

import { Head } from "@inertiajs/react";

export default function Home({ auth, categories, latests, mostViewed }) {
    return (
        <>
            <Head title="Home" />
            <div className="overflow-hidden">
                <Heading auth={auth} />
                <NavBar />
                <HeadContainer categories={categories} />
                <Description />
                <div className="bg-gray-300 min-h-[70vh] flex flex-col items-center overflow-hidden">
                    <LatestEstates estates={latests} title="Latest Uploaded" />
                    <LatestEstates estates={mostViewed} title="Most Viewed" />
                    <Awards />
                </div>
                <FAQ />
                <Footer />
            </div>
        </>
    );
}