import * as S from "./styles";
import { FaSearch } from "react-icons/fa"
import { ImMenu } from "react-icons/im"
import { useLocation } from 'react-router-dom';
import Malcom from "../../assets/Images/malcom.jpeg"

function mapPathToPageName(path: string) {
    switch (path) {
        case '/dashboard':
            return 'Dashboard';
        case '/statistics':
            return 'Estatísticas';
        case '/profile':
            return 'Perfil';
        default:
            return 'Página não encontrada';
    }
}

export const HeaderDashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageName = mapPathToPageName(currentPath);

    return (
        <S.Wrapper>
            <S.Content>
                <S.Info>
                    <S.InfoPage>Páginas/{pageName}</S.InfoPage>
                    <S.CurrentPage>{pageName}</S.CurrentPage>
                </S.Info>
                <S.Menu>
                    <S.InputContainer>
                        <FaSearch />
                        <S.Input placeholder="Busca" />
                    </S.InputContainer>
                    <S.BurguerMenu>
                        <ImMenu />
                    </S.BurguerMenu>
                    <S.StyledLink to="/profile" >
                        <S.ProfileImage
                            style={{
                                backgroundImage: `url(${Malcom})`,
                            }}
                        >

                        </S.ProfileImage>
                    </S.StyledLink>
                </S.Menu>
            </S.Content>
        </S.Wrapper>
    )
}