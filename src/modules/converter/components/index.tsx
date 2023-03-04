import { FC } from "react";
import { useConverterFields } from "../hooks/useConverterFields";
import { useConverter } from "../hooks/useConverter";
import { useGetRates } from "../hooks/useGetRates";
import { Error } from "../../../atoms/error";
import { Loader } from "../../../atoms/loader";
import { ConverterUI } from "../../../organisms/converter";

export interface IConverterProps {
    ratesMap: Record<string, number>;
    decimals?: number;
}

export const Converter: FC<IConverterProps> = ({ ratesMap, ...rest }) => {
    // better division between data and business logics hook
    const fields = useConverterFields(ratesMap);
    const converterController = useConverter(ratesMap);

    return (
        <ConverterUI
            ratesMap={ratesMap}
            {...converterController}
            {...fields}
            {...rest}
        />
    )
}

export interface AppConverterProps { };
// not my best naming, but it's just to split API fetch logics from the actual converter
export const AppConverter: FC<AppConverterProps> = () => {
    const { ratesMap, isLoading } = useGetRates();

    if (isLoading) {
        return <Loader />
    }
    if (!ratesMap) {
        return <Error message="missing rates" />
    }
    return (
        <Converter ratesMap={ratesMap} />
    );
}