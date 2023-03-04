import { useEffect, useState } from "react";
import { fetchConversionRates } from "../services/api";

export function useGetRates() {
    const [ratesData, setRatesData] = useState<Record<string, number> | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchConversionRates()
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
