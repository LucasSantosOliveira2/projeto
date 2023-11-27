import * as S from "./styles";
import Arrow from "../../components/Images/Arrow";
import Google from "../../components/Images/GoogleIcon";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../components/UserContext";

export const SignIn = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();


    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);

            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
<<<<<<< HEAD
                    { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
                ).then(response => response.json());

                console.log(userInfo);

                // Salvar informações relevantes no localStorage
                localStorage.setItem('token', tokenResponse.access_token);
                localStorage.setItem('userInfo', JSON.stringify(userInfo));

                // Configurar o estado do usuário
                setUser(userInfo);
=======
                    { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
                );
>>>>>>> 315a8a6777e1f3b03aca8bfe60393b7240daf41c

                console.log(userInfo.data);
                setUser(userInfo.data);
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