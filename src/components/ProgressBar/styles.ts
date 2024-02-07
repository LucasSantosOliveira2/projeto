// styles.ts
import styled from "styled-components";

type FillerProps = {
  polarity: "neg" | "pos" | "neu";
  width: number;
};

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ProgressBar = styled.div`
  position: relative;
  margin: auto;
  width: 200px;
  height: 20px;
  background-color: #A3AED0;
  border-radius: 8px;
  overflow: hidden;
`;

export const Filler = styled.div<FillerProps>`
  height: 100%;
  background: ${(props) =>
    props.polarity === "neg"
      ? "linear-gradient(90deg, rgba(255,164,164,1) 0%, rgba(255,0,0,1) 100%);" // Gradiente de vermelho
      : props.polarity === "pos"
      ? "linear-gradient(90deg, rgba(183,255,190,1) 0%, rgba(0,182,0,1) 100%);" // Gradiente de verde
      : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(201,201,201,1) 100%);"}; // Gradiente de cinza para neutro
  border-radius: inherit;
  width: ${(props) => props.width || 0}%;
  transition: width 0.2s ease-in;
`;

export const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
`;
