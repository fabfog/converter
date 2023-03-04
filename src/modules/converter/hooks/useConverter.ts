import { useMemo, useState } from "react"
import { convertRates } from "../services/conversions";

export function useConverter(ratesMap: Record<string, number>) {
    const defaultValue = Object.keys(ratesMap)[0];

    const [currencyFrom, setCurrencyFrom] = useState<string | null>(defaultValue ?? null);
    const [currencyTo, setCurrencyTo] = useState<string | null>(defaultValue ?? null);

    const [amount, setAmount] = useState(0);

    const convertedAmount = useMemo(() => {
        console.log('ooo', currencyFrom, currencyTo)
        if (currencyFrom && currencyTo) {
            return convertRates(ratesMap, currencyFrom, currencyTo, amount);
        } else {
            return null;
        }
    }, [ratesMap, currencyFrom, currencyTo, amount])

    return {
        amount,
        setAmount,
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo,
        convertedAmount,
    }
}
