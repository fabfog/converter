import { FC, useCallback, useMemo } from "react";
import { Select } from "../atoms/inputs";
import { IConverterProps } from "../modules/converter/components";
import { IConverterController, IConverterFields } from "../modules/types/converter";

export interface ConverterUIProps extends IConverterFields, IConverterController, IConverterProps {};

export const ConverterUI: FC<ConverterUIProps> = ({
    ratesMap,
    decimals = 2,
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    amount,
    setAmount,
    convertedAmount,
    updateConvertedAmount
}) => {
    const ratesAsOptions = useMemo(() => {
        return Object.keys(ratesMap)
            .map(key => {
                return { value: key, label: key };
            })
    }, [ratesMap]);

    const onSubmit = useCallback(() => {
        if (currencyFrom && currencyTo) {
            updateConvertedAmount(currencyFrom, currencyTo, amount);
        }
    }, [currencyFrom, updateConvertedAmount, currencyTo, amount]);

    const isSubmitDisabled = !currencyFrom || !currencyTo;

    return (
        <div className="row">
            <Select
                value={currencyFrom ?? ''}
                onChange={e => setCurrencyFrom(e.target.value)}
                options={ratesAsOptions}
                placeholder="from"
            />
            <input value={amount} onChange={e => setAmount(+e.target.value)} placeholder="amount" />
            <p style={{ margin: 'auto 10px' }}>to</p>
            <Select
                value={currencyTo ?? ''}
                onChange={e => setCurrencyTo(e.target.value)}
                options={ratesAsOptions}
                placeholder="to"
            />
            <p style={{ marginLeft: 10 }}>
                {(convertedAmount ?? 0).toFixed(decimals)}
            </p>
            <div style={{ margin: 'auto 10px' }}>
                <button disabled={isSubmitDisabled} onClick={onSubmit}>calculate</button>
            </div>
        </div>
    );
}
