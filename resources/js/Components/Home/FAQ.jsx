export default function FAQ() {
    return (
        <>
            <div className="bg-white h-[50vh] flex flex-col items-center">
                <h1 className="text-[2em] mt-3">Need Help?</h1>
                <div className="flex lg:flex-row flex-col gap-10 justify-evenly items-center my-[5em] w-full text-black">
                    <div className="flex flex-col w-[450px] h-[300px] gap-[2em] justify-center items-center lg:shadow-2xl shadow-none p-2 white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black border-2 border-black rounded-full p-2" height="60" width="60" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                        <div className="flex flex-col gap-[2em] justify-center">
                            <h1 className="font-bold text-[18px] text-center">How do I book a stay?</h1>
                            <p className="lg:text-[18px] text-[16px] px-2 lg:text-justify text-center">Booking with us is a breeze!
                                Simply navigate to our user-friendly platform, enter your destination and dates,
                                explore our curated listings, and secure your dream accommodation with just a few clicks.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[450px] h-[300px] gap-[2em] justify-center items-center lg:shadow-2xl shadow-none p-2 white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black border-2 border-black rounded-full p-2" height="60" width="60" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" /></svg>
                        <div className="flex flex-col gap-[2em] justify-center">
                            <h1 className="font-bold text-[18px] text-center">Can I trust the properties listed?</h1>
                            <p className="lg:text-[18px] text-[16px] px-2 lg:text-justify text-center">Absolutely! We take pride in curating a selection of accommodations that meet our high standards of comfort and authenticity.
                                Each property is vetted to ensure a delightful stay for our guests.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[450px] h-[300px] gap-[2em] justify-center items-center lg:shadow-2xl shadow-none p-5 white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black border-2 border-black rounded-full p-2" height="60" width="60" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        <div className="flex flex-col gap-[2em] justify-between">
                            <h1 className="font-bold text-[18px] text-center">How can I contact mi-casa-su-casa support?</h1>
                            <p className="lg:text-[18px] text-[16px] px-2 lg:text-justify text-center">We're here for you! Feel free to reach out to our dedicated support team through our Contact Us page.
                                We strive to respond promptly to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}