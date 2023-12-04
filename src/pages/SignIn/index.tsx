import * as S from "./styles";
import Arrow from "../../components/Images/Arrow";
import Google from "../../components/Images/GoogleIcon";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../components/UserContext";
import axios from 'axios';

export const SignIn = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {

            try {
                const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });

                const userInfo = userInfoResponse.data;

                fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: userInfo.email,
                        name: userInfo.name,
                    }),

                })
                setUser(userInfo);

                window.localStorage.setItem('userInfo', JSON.stringify(userInfo));

                navigate('/profile');
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
                        <S.TextDashborder>Voltar</S.TextDashborder>
                    </S.ButtonBack>
                </S.StyledLink>
                <S.Headline>
                    <S.Title>Entrar</S.Title>
                    <S.Text>Entre com sua conta Google</S.Text>
                </S.Headline>
                <S.ButtonGoogle onClick={() => googleLogin()}>
                    <Google />Entrar com Google
                </S.ButtonGoogle>
            </S.Container>
        </S.Wrapper>
    );
};
