import { FC, PropsWithChildren } from "react";

import './layout.css';

export interface CenteredLayoutProps extends PropsWithChildren<{}> { };

export const CenteredLayout: FC<CenteredLayoutProps> = (props: CenteredLayoutProps) =>
    <div className="centered-wrapper mt-50">{props.children}</div>


