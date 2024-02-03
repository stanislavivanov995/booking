import { CurrencyContext } from "@/context/currencyContext";
import { Link } from "@inertiajs/react";
import { useContext } from "react";

export default function LatestOfferCard({ estate }) {
    const { formatPrice, currency } = useContext(CurrencyContext);
    const price = formatPrice(estate.price, estate.currency, currency);

    return (
        <>
            <Link href={route("estate.details", estate.id)}>
                <article className="hover:shadow-2xl w-[400px] transition-[0.3s] hover:cursor-pointer flex flex-col h-full">
                    <div className="block w-[400px] h-auto rounded-t-lg overflow-hidden">
                        {estate.images[0] ? (
                            <img
                                className="object-cover h-48 w-96"
                                src={estate.images[0].url}
                                alt={estate.images[0].url}
                            />
                        ) : (
                            <img
                                className="object-contain h-48 w-96"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-no-image-1771002-1505134.png"
                                alt="default estate"
                            />
                        )}
                    </div>
                    <div className="bg-white w-[400px] h-[250px] rounded-b-lg p-3 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="font-bold text-[20px] my-2">
                                {estate.name}
                            </h2>
                            <p className="mb-3 line-clamp-4">
                                {estate.description}
                            </p>
                            <hr />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    width="12"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                                <p>{estate.location}</p>
                            </div>
                            <div className="flex gap-2 items-center pr-2">
                                <p className="font-bold">
                                    {currency} {price}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </>
    );
}
