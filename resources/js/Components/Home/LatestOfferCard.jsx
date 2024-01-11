export default function LatestOfferCard() {
    return (
        <>
            <div className="hover:shadow-2xl w-[400px] transition-[0.3s] hover:cursor-pointer">
                <img className="block w-[400px] h-auto rounded-t-lg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ed/ee/d8/outdoor-pool.jpg?w=1200&h=-1&s=1" alt="" />
                <div className="bg-white w-[400px] rounded-b-lg p-3">
                    <h2 className="font-bold text-[20px] my-2">Avenue Hotel</h2>
                    <p className="mb-3 line-clamp-4 w-full">Located in Burgas City, 3.1 km from Burgas Saltworks, Avenue Hotel Deluxe provides air-conditioned rooms and a fitness centre. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. Guests can have a drink at the bar.</p>
                    <hr />
                    <div className="flex justify-between mt-2 items-center">
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            <p>Burgas, Bulgaria</p>
                        </div>
                        <div className="flex gap-2 items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" /></svg>
                            <p className="font-bold">399</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}