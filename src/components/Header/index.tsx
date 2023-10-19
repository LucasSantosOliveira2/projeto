import * as S from "./styles";
import { Logo } from './../Logo';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <S.Wrapper>
            <Logo name="ChatBot" />
            <S.Menu>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Sobre nós</a>
                </li>
                <li>
                    <a>Membros</a>
                </li>
            </S.Menu>
            <Link to="/dashboard">
                <S.LoginButton> Entrar </S.LoginButton>
            </Link>
        </S.Wrapper>
    )
}