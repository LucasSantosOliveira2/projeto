import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";
import { PredominantSentiment } from "../../components/PredominantSentiment";
import { ButtonDashboard } from "../../components/DashboardComponents/ButtonDashboard";
import { CardTitle } from "../../components/DashboardComponents/CardTitle";
import { CloudWord } from "../../components/CloudWord";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { Polarity } from "../../components/Polarity";

export const Dashboard = () => {
  const [data2, setData2] = useState<Project | null>(null);
  const [dominantEmotion, setDominantEmotion] = useState<any>("outros");
  const [dominantPercentageEmotion, setDominantPercentageEmotion] =
    useState<any>(0);

  const [emotions, setEmotions] = useState<string[]>([]);
  const [percentageEmotions, setPercentageEmotions] = useState<number[]>([]);

  const [polarity, setPolarity] = useState<any>("neu");
  const [percentagePolarity, sePercentagePolarity] = useState<any>(0);

  const [word, setWord] = useState<string[]>([]);
  const [times, setTimes] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>("Geral");

  const url = "http://35.209.202.3:8080";

  interface Project {
    nomeProjeto: string;
    tarefas: {
      nome: string;
      analiseIronia: {
        output: string;
        porcentagemIronia: number;
        porcentagemNaoIronia: number;
      };
      analisePolaridade: {
        output: string;
        positivo: number;
        negativo: number;
        neutro: number;
      };
      analiseSentimento: {
        output: string;
        alegria: number;
        medo: number;
        nojo: number;
        outros: number;
        raiva: number;
        surpresa: number;
        tristeza: number;
      };
      contagemPalavras: {
        palavra: string[];
        contagemPalavra: number[];
      };
    }[];
  }

  const userInfo = window.localStorage.getItem("userInfo");
  const userEmail = userInfo ? JSON.parse(userInfo).email : "";

  const location = useLocation();
  const { projectId } = location.state || {};

  useEffect(() => {
    fetch(`${url}/api/sentimentos/getProjectAnalises/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((receivedData) => {
        setData2(receivedData);
        setSelectedOption({
          value: 0,
          label: receivedData.tarefas[0].nome,
        });
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }, [projectId, userEmail]);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);

    const porcentagensEmotion =
      data2?.tarefas[selectedOption.value].analiseSentimento;
    const porcentagensPolarity =
      data2?.tarefas[selectedOption.value].analisePolaridade;

    const word = data2?.tarefas[selectedOption.value].contagemPalavras.palavra;
    setWord(word ? word : []);

    const times =
      data2?.tarefas[selectedOption.value].contagemPalavras.contagemPalavra;
    setTimes(times ? times : []);

    if (porcentagensPolarity) {
      const { positivo, negativo, neutro } = porcentagensPolarity;

      const maiorPorcentagem = Math.max(positivo, negativo, neutro);

      setPolarity(
        data2?.tarefas[selectedOption.value].analisePolaridade?.output
      );
      sePercentagePolarity(maiorPorcentagem);
    }

    if (porcentagensEmotion) {
      const { alegria, medo, nojo, outros, raiva, surpresa, tristeza } =
        porcentagensEmotion;

      const maiorPorcentagem = Math.max(
        alegria,
        medo,
        nojo,
        outros,
        raiva,
        surpresa,
        tristeza
      );

      setEmotions([
        "Alegria",
        "Medo",
        "Nojo",
        "Outros",
        "Raiva",
        "Surpresa",
        "Tristeza",
      ]);

      setPercentageEmotions([
        alegria,
        medo,
        nojo,
        outros,
        raiva,
        surpresa,
        tristeza,
      ]);

      setDominantEmotion(
        data2?.tarefas[selectedOption.value].analiseSentimento?.output
      );
      setDominantPercentageEmotion(maiorPorcentagem);
    }
  };

  return (
    <S.Wrapper>
      <S.SidebarContainer>
        <Sidebar />
        <HeaderDashboard />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.ContainerInfo>
          <CardTitle title={data2?.nomeProjeto} width="250px" />
          <S.CustomSelect>
            <S.Label>Tarefas</S.Label>
            <Select
              options={
                data2 && data2.tarefas
                  ? data2.tarefas.map((task, index) => ({
                      value: index,
                      label: task.nome,
                    }))
                  : []
              }
              defaultValue={selectedOption}
              onChange={handleChange}
              placeholder="Selecione"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  direction: "ltr",
                  border: "none", 
                  boxShadow: "none", 
                  backgroundColor: "#111C44",
                  color: "white",
                  "&:hover": {
                    cursor: "pointer", 
                  },
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#111C44",
                  color: "white",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused ? "#7551FF" : "#111C44",
                  color: "white",
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),
                dropdownIndicator: (base, state) => ({
                  ...base,
                  color: "white",
                  "&:hover": {
                    color: "#A3AED0",
                  },
                }),
              }}
            />
          </S.CustomSelect>

          <ButtonDashboard name="Exportar" widht="200px" action="export" onClick={() => redirect("exportar")} />
          <ButtonDashboard name="Editar" widht="200px" action="edit" onClick={() => redirect("editar")} />
          <ButtonDashboard name="Excluir" widht="200px" action="delete" onClick={() => redirect("excluir")} />
        </S.ContainerInfo>
        <S.ContainerInfo>
          <PredominantSentiment
            emotion={dominantEmotion}
            percentage={dominantPercentageEmotion}
          />
          <Polarity polarity={polarity} percentage={percentagePolarity} />
        </S.ContainerInfo>
        <CloudWord word={word} times={times} />
        <Graphic emotion={emotions} percentage={percentageEmotions} />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
