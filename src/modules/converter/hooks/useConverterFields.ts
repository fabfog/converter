import { useState } from "react"
import { IConverterFields } from "../../types/converter";

export function useConverterFields(ratesMap: Record<string, number>): IConverterFields {
    const defaultValue = Object.keys(ratesMap)[0];

    const [currencyFrom, setCurrencyFrom] = useState<string | null>(defaultValue ?? null);
    const [currencyTo, setCurrencyTo] = useState<string | null>(defaultValue ?? null);

    const [amount, setAmount] = useState(0);

    return {
        amount,
        setAmount,
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo,
    }
}
