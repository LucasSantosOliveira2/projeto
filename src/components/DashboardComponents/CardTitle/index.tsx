// CardTitle.tsx
import * as S from "./styles";
import { FaChartLine } from "react-icons/fa6";

type CardTitleProps = {
  title: string | undefined;
  width: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ title, width }) => {
  return (
    <S.StyledCardTitle style={{ width: width }}>
      <S.DivIcon>
        <FaChartLine size={24} />
      </S.DivIcon>
      {title}
    </S.StyledCardTitle>
  );
};
