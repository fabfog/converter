import { DetailedHTMLProps, FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react";

export interface ISelectOption extends Partial<DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>> {
    value: string;
    label: string;
}

export interface CurrencySelectProps extends Partial<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> {
    options: ISelectOption[];
}

export const CurrencySelect: FC<CurrencySelectProps> = ({
    value,
    options,
    ...rest
}) => {
    return <select value={value} {...rest}>
        {options.map(({ value, label, ...restOptionProps }) => (
            <option value={value} key={value} {...restOptionProps}>{label}</option>
        ))}
    </select>
}
