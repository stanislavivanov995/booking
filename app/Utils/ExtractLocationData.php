<?php

namespace App\Utils;
use GuzzleHttp\Client;


trait ExtractLocationData
{
    public function extract_location_data($placeId, $api_key)
    {
        $client = new Client();
        $response = $client->get(
            "https://maps.googleapis.com/maps/api/place/details/json?placeid=$placeId&key="
            . $api_key
        );

        $locationData = json_decode($response->getBody(), true);

        return $locationData;
    }
}