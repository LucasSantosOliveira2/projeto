import { useState } from "react";
import { Chart } from "react-google-charts";
import * as S from "./styles";

type SentimentProps = {
  emotion: string[];
  percentage: number[];
}

export function Graphic({ emotion, percentage }: SentimentProps) {
  const [chartData, setChartData] = useState(null);

  const options = {
    backgroundColor: "#111C44",
    titleTextStyle: {
      color: 'white',
      fontSize: 20,
    },
    legend: {
      textStyle: {
        color: 'white',
        fontSize: 12,
      }
    },
  };

  const formattedData = [
    ["Alegria", percentage[0]],
    ["Medo", percentage[1]],
    ["Nojo", percentage[2]],
    ["Outros", percentage[3]],
    ["Raiva", percentage[4]],
    ["Surpresa", percentage[5]],
    ["Tristeza", percentage[6]],
  ];

  const combinedData = [["Emoção", "Porcentagem"], ...formattedData];

  return (
    <S.Wrapper>
      <S.Title>Grafico de Sentimentos</S.Title>
      <Chart
        chartType="PieChart"
        data={combinedData}
        options={options}
        width="100%"
        height="100%"
      />
    </S.Wrapper>
  );
}
