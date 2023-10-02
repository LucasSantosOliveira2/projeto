import * as S from "./styles";
import { Logo } from './../Logo';

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
                    <a>Contatos</a>
                </li>
            </S.Menu>
            <S.LoginButton> Entrar </S.LoginButton>
        </S.Wrapper>
    )
}