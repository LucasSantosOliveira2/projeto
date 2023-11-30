import * as S from "./styles";
import { Logo } from './../Logo';

export const Header = () => {
    return (
        <S.Wrapper>
            <Logo name="FAS" />
            <S.Menu>
                <li>
                    <S.StyledLink to="/" >
                        Home
                    </S.StyledLink>
                </li>

                <li>
                    <a>Sobre nós</a>
                </li>

                <li>
                    <S.StyledLink to="/members" >
                        Membros
                    </S.StyledLink>

                </li>
            </S.Menu>
            <S.StyledLink to="/signin">
                <S.LoginButton> Entrar </S.LoginButton>
            </S.StyledLink>
        </S.Wrapper>
    )
}