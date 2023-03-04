import { useState } from "react"

export function useConverter(ratesMap: Record<string, number>) {
    const defaultValue = Object.keys(ratesMap)[0];

    const [currencyFrom, setCurrencyFrom] = useState<string | null>(defaultValue ?? null);
    const [currencyTo, setCurrencyTo] = useState<string | null>(defaultValue ?? null);

    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    return {
        amount,
        setAmount,
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo,
        convertedAmount,
        setConvertedAmount,
    }
}
