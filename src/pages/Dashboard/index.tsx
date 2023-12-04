import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";
import { PredominantSentiment } from "../../components/PredominantSentiment";
import { CloudWord } from "../../components/CloudWord";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { Polarity } from "../../components/Polarity";

export const Dashboard = () => {

  const [data2, setData2] = useState<Project | null>(null);
  const [dominantEmotion, setDominantEmotion] = useState<any>("outros");
  const [dominantPercentageEmotion, setDominantPercentageEmotion] = useState<any>(0);

  const [emotions, setEmotions] = useState<string[]>([]);
  const [percentageEmotions, setPercentageEmotions] = useState<number[]>([]);

  const [polarity, setPolarity] = useState<any>("neu");
  const [percentagePolarity, sePercentagePolarity] = useState<any>(0);

  const [word, setWord] = useState<string[]>([]);
  const [times, setTimes] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>("Geral");

  interface Project {
    nomeProjeto: string;
    tarefas: {
      nome: string;
      analiseIronia: {
        output: string;
        porcentagemIronia: number;
        porcentagemNaoIronia: number;
      },
      analisePolaridade: {
        output: string;
        positivo: number;
        negativo: number;
        neutro: number;
      },
      analiseSentimento: {
        output: string;
        alegria: number;
        medo: number;
        nojo: number;
        outros: number;
        raiva: number;
        surpresa: number;
        tristeza: number;
      },
      contagemPalavras: {
        palavra: string[],
        contagemPalavra: number[]
      }
    }[];
  }


  const userInfo = window.localStorage.getItem("userInfo");
  const userEmail = userInfo ? JSON.parse(userInfo).email : "";

  const location = useLocation();
  const { projectId } = location.state || {};

  useEffect(() => {
    fetch(`http://localhost:8080/api/sentimentos/getProjectAnalises/${projectId}`, {
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

    const porcentagensEmotion = data2?.tarefas[selectedOption.value].analiseSentimento;
    const porcentagensPolarity = data2?.tarefas[selectedOption.value].analisePolaridade;

    const word = data2?.tarefas[selectedOption.value].contagemPalavras.palavra;
    setWord(word ? word : []);

    const times = data2?.tarefas[selectedOption.value].contagemPalavras.contagemPalavra;
    setTimes(times ? times : []);

    if (porcentagensPolarity) {
      const { positivo, negativo, neutro } = porcentagensPolarity;

      const maiorPorcentagem = Math.max(
        positivo,
        negativo,
        neutro
      );

      setPolarity(data2?.tarefas[selectedOption.value].analisePolaridade?.output);
      sePercentagePolarity(maiorPorcentagem);
    }


    if (porcentagensEmotion) {
      const {
        alegria,
        medo,
        nojo,
        outros,
        raiva,
        surpresa,
        tristeza,
      } = porcentagensEmotion;

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

      setDominantEmotion(data2?.tarefas[selectedOption.value].analiseSentimento?.output);
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
        <S.CustomSelect>
          <S.Title>Tarefas</S.Title>
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
            placeholder="Selecione uma tarefa"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                direction: "ltr",
                borderColor: state.isFocused ? '#7551FF' : '#1f0099',
                backgroundColor: '#111C44',
                color: 'white',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: '#111C44',
                color: 'white',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#7551FF' : '#111C44',
                color: 'white',
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: 'white',
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: 'white',
              }),

            }}

          />
        </S.CustomSelect>

        <S.ContainerInfo>
          <PredominantSentiment
            emotion={dominantEmotion}
            percentage={dominantPercentageEmotion}
          />
          <Polarity
            polarity={polarity}
            percentage={percentagePolarity}
          />
        </S.ContainerInfo>
        <CloudWord 
          word={word}
          times={times}
        />
        <Graphic
          emotion={emotions}
          percentage={percentageEmotions}
        />

      </S.ContentContainer>
    </S.Wrapper>
  );

};