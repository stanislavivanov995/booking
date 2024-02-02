import { router } from "@inertiajs/react";
import { useState } from "react"
import { Rating } from 'react-simple-star-rating'

export default function DetailsRating() {

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)

        // Send rating to api
        router.post()
    }

    return (
        <>
            <Rating onClick={handleRating} />
        </>
    )
}