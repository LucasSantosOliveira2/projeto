import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import * as S from "./styles";

export function Graphic() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/sentimentos/mockGrafico', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setChartData(data);
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

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

  const formattedData = chartData
    ? Object.entries(chartData).map(([emoção, porcentagem]) => [emoção, porcentagem])
    : [];

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

      {/* <GaugeComponent
        arc={{
          subArcs: [
            {
              limit: 20,
              color: '#EA4228',
              showTick: true
            },
            {
              limit: 40,
              color: '#F58B19',
              showTick: true
            },
            {
              limit: 60,
              color: '#F5CD19',
              showTick: true
            },
            {
              limit: 80,
              color: '#5BE12C',
              showTick: true
            },
            {
              limit: 100,
              color: '#2CC990',
              showTick: true
            },
          ]
        }}
        style={
          {
            width: 400,
            height: 320,
          }
        }
        value={20}
      /> */}
    </S.Wrapper>
  );
}
