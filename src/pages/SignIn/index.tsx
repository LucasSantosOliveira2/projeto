import * as S from "./styles";
import Arrow from "../../components/Images/Arrow";
import Google from "../../components/Images/GoogleIcon";

export const SignIn = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.StyledLink to="/">
                    <S.ButtonBack>
                        <Arrow />
                        <S.TextDashborder>Voltar</S.TextDashborder >
                    </S.ButtonBack>
                </S.StyledLink>
                <S.Headline>
                    <S.Title>Entrar</S.Title>
                    <S.Text>Entre com sua conta Google</S.Text>
                </S.Headline>
                <S.StyledLink to="/project">
                    <S.ButtonGoogle>
                        <Google />Entrar com Google
                    </S.ButtonGoogle>
                </S.StyledLink>

            </S.Container >
        </S.Wrapper >
    )
}
