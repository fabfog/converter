import { useEffect, useState } from "react";
import { mockedFetchConversionRates } from "../services/api";

export function useGetRates() {
    const [ratesData, setRatesData] = useState<Record<string, number> | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        mockedFetchConversionRates()
            .then(data => setRatesData(data))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {
        ratesMap: ratesData,
        isLoading,
    }
}
