import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";
import { PredominantSentiment } from "../../components/PredominantSentiment";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/sentimentos/mockGrafico", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }, []);

  const formattedData: [string, number][] = data
    ? Object.entries(data).map(([emoção, porcentagem]) => [
        emoção,
        Number(porcentagem),
      ])
    : [];

  const combinedData = [["Emoção", "Porcentagem"], ...formattedData];

  console.log(combinedData);
  const mostDominantEmotion: [string, number] = formattedData.reduce(
    (prev: [string, number], current: [string, number]) =>
      prev[1] > current[1] ? prev : current,
    ["", 0]
  );

  const [dominantEmotion, dominantPercentage] = mostDominantEmotion;
  console.log(
    "Resultado da emoção dominante",
    dominantEmotion,
    dominantPercentage
  );

  return (
    <S.Wrapper>
      <S.SidebarContainer>
        <Sidebar />
        <HeaderDashboard />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.ContainerInfo>
          <PredominantSentiment
            emotion={dominantEmotion}
            percentage={dominantPercentage}
          />
          <Graphic />
        </S.ContainerInfo>
        <S.ContainerInfo>
          <S.GraphicWrapper>
            <S.Title>Polaridade</S.Title>
          </S.GraphicWrapper>
          <S.GraphicWrapper2>
            <S.Title>Nuvem de Palavras</S.Title>
          </S.GraphicWrapper2>
        </S.ContainerInfo>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
