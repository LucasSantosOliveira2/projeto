import * as S from "./styles";
import Arrow from "../../components/Images/Arrow";
import Google from "../../components/Images/GoogleIcon";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const SignIn = () => {

    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);

            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
                );

                console.log(userInfo.data);
                navigate('/dashboard');
            } catch (error) {
                console.error('Erro ao obter informações do usuário:', error);
            }
        },
        onError: (errorResponse) => console.log(errorResponse),
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
                <S.ButtonGoogle onClick={() => googleLogin()}>
                    <Google />Entrar com Google
                </S.ButtonGoogle>
            </S.Container >
        </S.Wrapper >
    )
}
