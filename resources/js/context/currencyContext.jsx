import { createContext, useState } from "react";

export const CurrencyContext = createContext("BGN");

export default function CurrencyContextProvider({ children }) {
    const [currency, setCurrency] = useState("BGN");

    const exchangeRates = {
        USD: 1.74,
        EUR: 1.95,
        BGN: 1,
    };

    const formatPrice = (estatePrice, estateCurrency, selectedCurrency) => {
        if (
            !exchangeRates.hasOwnProperty(estateCurrency) ||
            !exchangeRates.hasOwnProperty(selectedCurrency)
        ) {
            return null;
        }

        const convertedPrice =
            (estatePrice * exchangeRates[estateCurrency]) /
            exchangeRates[selectedCurrency];

        return parseFloat(convertedPrice.toFixed(2));
    };

    const contextValues = {
        formatPrice,
        setCurrency,
        currency,
    };

    return (
        <CurrencyContext.Provider value={contextValues}>
            {children}
        </CurrencyContext.Provider>
    );
}
