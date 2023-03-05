import { Dispatch, SetStateAction } from "react";

export interface IConverterFields {
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    currencyFrom: string | null;
    setCurrencyFrom: Dispatch<SetStateAction<string | null>>;
    currencyTo: string | null;
    setCurrencyTo: Dispatch<SetStateAction<string | null>>;
}

export interface IConverterController {
    convertedAmount: number;
    setConvertedAmount: Dispatch<SetStateAction<number>>;
    getCalculatedConvertedAmount: (currencyFrom: string, currencyTo: string, amount: number) => number;
    updateConvertedAmount: (currencyFrom: string, currencyTo: string, amount: number) => void;
}