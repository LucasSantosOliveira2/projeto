// ProgressBarComponent.tsx
import React from "react";
import * as S from "./styles";

type ProgressBarComponentProps = {
  percentage: number;
  polarity: "neg" | "pos" | "neu";
};

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  percentage,
  polarity,
}) => {
  const normalizedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <S.Wrapper>
      <S.ProgressBar>
        <S.Filler polarity={polarity} width={normalizedPercentage}>
          <S.PercentageText>{`${normalizedPercentage}%`}</S.PercentageText>
        </S.Filler>
      </S.ProgressBar>
    </S.Wrapper>
  );
};

export default ProgressBarComponent;
