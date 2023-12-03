import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";
import { PredominantSentiment } from "../../components/PredominantSentiment";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState<Project | null>(null);


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

  interface Project {
    id: number;
    nomeProjeto: string;
    objetivo_projeto: string;
    num_participantes: number;
    analistas: string[];
    tarefas: string[];
  }

  const [projects, setProjects] = useState<Project[]>([]);

  const userInfo = window.localStorage.getItem("userInfo");
  const userEmail = userInfo ? JSON.parse(userInfo).email : "";

  const location = useLocation();
  const { projectData, projectId } = location.state || {};

  console.log("Location state:", location.state);

  useEffect(() => {
    fetch(`http://localhost:8080/api/sentimentos/getProject/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((receivedData) => {
        console.log("Data2:", receivedData);
        setData2(receivedData);
        console.log("projectTasks:", receivedData.tarefas);
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }, [userEmail]);

  console.log("Data2:", data2);
  console.log("Tarefas:", data2 && data2.tarefas);

  return (
    <S.Wrapper>
      <S.SidebarContainer>
        <Sidebar />
        <HeaderDashboard />
      </S.SidebarContainer>
      <S.ContentContainer>
        <Select
          options={
            data2 && data2.tarefas
              ? data2.tarefas.map((task, index) => ({
                  value: index,
                  label: task,
                }))
              : []
          }
          placeholder="Selecione uma tarefa"
        />

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
