import { useEffect, useState } from "react";
import { fetchConversionRates } from "../services/api";

export function useGetRates() {
    const [ratesMap, setRatesMap] = useState<Record<string, number> | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchConversionRates()
            .then(setRatesMap)
            .finally(() => setIsLoading(false));
    }, []);

    return {
        ratesMap,
        isLoading,
    }
}
