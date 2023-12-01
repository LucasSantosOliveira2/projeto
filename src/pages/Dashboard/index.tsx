import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <HeaderDashboard />
      <S.ContentContainer>

        <S.GraphicWrapper>
            <S.Title>Gráfico de Sentimentos - Geral</S.Title>
          <Graphic />
        </S.GraphicWrapper>

        <S.GraphicWrapper>
        <S.Title>Gráfico de Sentimentos - Participante X</S.Title>
          <Graphic />
        </S.GraphicWrapper>

        <S.GraphicWrapper>
        <S.Title>Gráfico de Sentimentos - Tarefa X</S.Title>
          <Graphic />
        </S.GraphicWrapper>

      </S.ContentContainer>
    </S.Wrapper>
  );
};
