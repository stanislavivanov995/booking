import { useContext } from "react";
import { CurrencyContext } from "@/context/currencyContext";

export default function CurrencyDropdown() {
    const { currency, setCurrency } = useContext(CurrencyContext);

    return (
        <select
            className="border-none text-lg font-medium rounded-lg"
            onChange={(e) => setCurrency(e.target.value)}
            defaultValue={currency}
            style={{ cursor: "pointer" }}
        >
            <option value="BGN">BGN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    );
}
