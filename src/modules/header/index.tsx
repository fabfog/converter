import { FC, PropsWithChildren } from "react";
import './header.css';
import logo from '../../images/Q-pay.png';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Logo: FC<{}> = () =>
    <img src={logo} height="45px" alt="logo" />;

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <header className="">{props.children}</header>

export const Content: FC<HeaderProps> = () => (
    <>
        <div className="header-container" style={{ paddingRight: 10 }}>
            <div className="row">
                <div className="col-6">
                    <Logo />
                </div>
                <div className="col-6 t-right">
                    Pay faster, pay smarter
                </div>
            </div>
        </div>
    </>
)

export const Header: FC<HeaderProps> = () => {
    return (
        <Wrapper>
            <Content />
        </Wrapper>
    )
};