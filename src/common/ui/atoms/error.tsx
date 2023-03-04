import { FC } from "react";

export interface IError { 
    message: string;
};

export const Error: FC<IError> = ({ message }) => {
    // TODO maybe a better style...
    return <p>{message}</p>
}
