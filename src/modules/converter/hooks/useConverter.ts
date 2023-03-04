import { useCallback, useState } from "react"
import { IConverterController } from "../../../common/types/converter";
import { convertRates } from "../services/conversions";

export function useConverter(ratesMap: Record<string, number>): IConverterController {
    const [convertedAmount, setConvertedAmount] = useState(0);

    const getCalculatedConvertedAmount = useCallback((currencyFrom: string, currencyTo: string, amount: number) => {
        return convertRates(ratesMap, currencyFrom, currencyTo, amount);
    }, [ratesMap]);

    const updateConvertedAmount = useCallback((currencyFrom: string, currencyTo: string, amount: number) => {
        setConvertedAmount(getCalculatedConvertedAmount(currencyFrom, currencyTo, amount));
    }, [getCalculatedConvertedAmount]);

    return {
        convertedAmount,
        setConvertedAmount,
        updateConvertedAmount,
        getCalculatedConvertedAmount,
    }
}
