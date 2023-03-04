import { FC, useCallback, useMemo } from "react";
import { useConverter } from "../hooks/useConverter";
import { useGetRates } from "../hooks/useGetRates";
import { convertRates } from "../services/conversions";
import { CurrencySelect } from "./inputs";

/**
 * If I had more time, I'd split this file into more files, specific for each component/type
 */
export const Loader = () => {
    // TODO maybe a better loader...
    return <div>loading...</div>
}


export interface IRatesError { 
    message: string;
};

export const RatesError = ({ message }: IRatesError) => {
    // TODO maybe a better style...
    return <p>{message}</p>
}

export interface ConverterProps {
    ratesMap: Record<string, number>;
    decimals?: number;
};

export const Converter: FC<ConverterProps> = ({ ratesMap, decimals = 2 }) => {
    const {
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo,
        convertedAmount,
        setConvertedAmount,
        amount,
        setAmount,
    } = useConverter(ratesMap ?? {});

    const ratesAsOptions = useMemo(() => {
        return Object.keys(ratesMap ?? {})
            .map(key => {
                return { value: key, label: key };
            })
    }, [ratesMap]);

    const onSubmit = useCallback(() => {
        if (currencyFrom && currencyTo) {
            setConvertedAmount(convertRates(ratesMap, currencyFrom, currencyTo, amount));
        }
    }, [ratesMap, currencyFrom, currencyTo, amount]);

    const isSubmitDisabled = !currencyFrom || !currencyTo;

    return (
        <div className="row">
            <CurrencySelect
                value={currencyFrom ?? ''}
                onChange={e => setCurrencyFrom(e.target.value)}
                options={ratesAsOptions}
                placeholder="from"
            />
            <input value={amount} onChange={e => setAmount(+e.target.value)} placeholder="amount" />
            <p style={{ margin: 'auto 10px', verticalAlign: 'center' }}>to</p>
            <CurrencySelect
                value={currencyTo ?? ''}
                onChange={e => setCurrencyTo(e.target.value)}
                options={ratesAsOptions}
                placeholder="to"
            />
            <div style={{ margin: 'auto 10px' }}>
                <button disabled={isSubmitDisabled} onClick={onSubmit}>calculate</button>
            </div>
            <p style={{ marginLeft: 10 }}>
                {(convertedAmount ?? 0).toFixed(decimals)}
            </p>
        </div>
    );
}


export interface AppConverterProps { };
// not my best naming, but it's just to split API fetch logics from the actual converter
export const AppConverter: FC<AppConverterProps> = () => {
    const { ratesMap, isLoading } = useGetRates();

    if (isLoading) {
        return <Loader />
    }
    if (!ratesMap) {
        return <RatesError message="missing rates" />
    }
    return (
        <Converter ratesMap={ratesMap} />
    );
}