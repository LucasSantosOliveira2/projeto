import * as S from "./styles";
import { ImMenu } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MenuHamburguer } from "../MenuHamburguer";

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
  const [menuIsVisible, setMenuIsVisible] = useState(false);

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
          {/* <S.InputContainer>
            <FaSearch />
            <S.Input placeholder="Busca" type="text" id="Busca" name="Busca" />
          </S.InputContainer> */}

          <MenuHamburguer menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
          <ImMenu onClick={() => setMenuIsVisible(true)} />
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
