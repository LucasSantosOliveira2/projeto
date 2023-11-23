import * as S from "./styles";
import Arrow from "../../components/Images/Arrow";
import Google from "../../components/Images/GoogleIcon";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export const SignIn = () => {


    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

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
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        if (credentialResponse && credentialResponse.credential) {
                            const decod = jwtDecode(credentialResponse.credential as string);
                            console.log(decod);
                        } else {
                            console.error('Login Successful, but credential is undefined or null');
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />

            </S.Container >
        </S.Wrapper >
    )
}
