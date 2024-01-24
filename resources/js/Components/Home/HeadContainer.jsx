import SearchBar from "./SearchBar";

export default function HeadContainer({ categories }) {
    return (
        <>
            <div
                className="bg-[url('https://wallpapercave.com/wp/wp1846069.jpg')] 
            bg-cover relative bg-center min-h-[60vh] text-center flex flex-col justify-center items-center opacity-1"
            >
                <h1 className="text-black lg:text-[5em] text-[2em] font-bold drop-shadow-2xl">
                    MI-CASA-SU-CASA
                </h1>
                <p className="text-black lg:text-[1.5em] text-[1.2em] drop-shadow-2xl mb-[7em]">
                    Your Gateway to Memorable Stays Around the Globe
                </p>
                <SearchBar categories={categories} />
            </div>
        </>
    );
}
