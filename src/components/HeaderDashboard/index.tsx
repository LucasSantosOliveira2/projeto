import * as S from "./styles";
import { FaSearch } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { useUser } from "../UserContext";

function mapPathToPageName(path: string) {
  switch (path) {
    case "/project":
      return "Projetos";
    case "/dashboard":
      return "Dashboard";
    case "/statistics":
      return "Estatísticas";
    case "/profile":
      return "Perfil";
    case "/analysis":
      return "Análise";
    default:
      return "Página não encontrada";
  }
}

export const HeaderDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { userData } = useUser();

  const pageName = mapPathToPageName(currentPath);

  const storedUserInfo = localStorage.getItem("userInfo");
  const storedUserPicture = storedUserInfo
    ? JSON.parse(storedUserInfo).picture
    : null;

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
            <S.Input placeholder="Busca" type="text" id="Busca" name="Busca" />
          </S.InputContainer>
          <S.BurguerMenu>
            <ImMenu />
          </S.BurguerMenu>
          <S.StyledLink to="/profile">
            <S.ProfileImage
              style={{
                backgroundImage: `url(${storedUserPicture})`,
              }}
            ></S.ProfileImage>
          </S.StyledLink>
        </S.Menu>
      </S.Content>
    </S.Wrapper>
  );
};
